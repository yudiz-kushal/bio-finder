import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'

import { allBios } from '@shared/api/allBios';
import { shuffleArray } from '@shared/utils';
import { blurImagesFemale, blurImagesMan } from '@shared/utils/images';

const InnerSection = dynamic(() => import('@shared/components/innerSection'))
const Advertisement = dynamic(() => import('@shared/components/advertisement'))
const BioCard = dynamic(() => import('@shared/components/bioCard'))

function BioList({ seo }) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await allBios({
          size: 12,
          pageNumber: 1,
          type: "aboutme_text",
          platFormType: "tinder"
        })

        const shuffledManImages = shuffleArray(blurImagesMan);
        const shuffledFemaleImages = shuffleArray(blurImagesFemale);

        const combinedImages = response?.data?.data?.ans?.map((item, i) => {
          const gender = item?.sGender;
          const imageArray = gender === '2' ? shuffledFemaleImages : shuffledManImages;
          // const imageArray = gender === '2' ? blurImagesMan : blurImagesFemale;
          const selectedImage = imageArray[i % imageArray.length]; //repeated images

          return { ...item, image: selectedImage };
        });

        setData(combinedImages);

      } catch (error) {
        console.error('Error fetching data:', error)
      }
    };

    fetchData();
  }, [])

  return (
    <InnerSection seo={seo}>
      <div className='row'>
        <div className='col-lg-9'>
          <div className='row g-3'>
            {data.map((text, i) => {
              return (
                <div className='col-xl-4 col-sm-6' key={i}>
                  <BioCard text={text} index={i} />
                </div>
              )
            })}
          </div>
        </div>
        <div className="col-lg-3 d-none d-lg-block">
          <Advertisement />
        </div>
      </div>
    </InnerSection>
  )
}
BioList.propTypes = {
  seo: PropTypes.object.isRequired
}
export default BioList
