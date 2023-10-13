import { useEffect } from 'react'
import dynamic from 'next/dynamic'

const HomeBanner = dynamic(() => import('@shared/components/homeBanner'))
const HomeSections = dynamic(() => import('@shared/components/homeSections'))

import { allBios } from '@shared/api/allBios'
import { shuffleArray } from '@shared/utils'
import { blurImagesFemale, blurImagesMan } from '@shared/utils/images'


export default function Home({ initialData }) {
  return (
    <div className='container'>
      <HomeBanner />
      <HomeSections data={initialData} />
    </div>
  )
}


export async function getServerSideProps() {
  try {
    const response = await allBios({
      size: 6,
      pageNumber: 1,
      type: "aboutme_text",
      platFormType: "tinder"
    });

    const shuffledManImages = shuffleArray(blurImagesMan);
    const shuffledFemaleImages = shuffleArray(blurImagesFemale);

    const combinedImages = response?.data?.data?.ans?.map((item, i) => {
      const gender = item?.sGender;
      const imageArray = gender === '2' ? shuffledFemaleImages : shuffledManImages;
      const selectedImage = imageArray[i % imageArray.length];
      return { ...item, image: selectedImage };
    });

    return {
      props: {
        initialData: combinedImages,
      },
    };
  } catch (error) {
    console.error('Error fetching initial data:', error);
    return {
      props: {
        initialData: [],
      },
    };
  }
}