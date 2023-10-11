import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'

import style from "./style.module.scss"
import { allBios } from '@shared/api/allBios'
import { useEffect, useState } from 'react'

const Heading = dynamic(() => import('@shared/components/heading'))
const BfLink = dynamic(() => import('@shared/components/bfLink'))
const BioCard = dynamic(() => import('@shared/components/bioCard'))

import { blurImagesMan, blurImagesFemale } from '@shared/utils/images'
import { shuffleArray } from '@shared/utils'
function HomeBio({ title, link, className = '' }) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await allBios({
          size: 6,
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
    <>
      <div className={`d-flex align-items-center justify-content-between mb-4 ${className}`}>
        <Heading tag="h2" small className='mb-0'>{title}</Heading>
        {link && <BfLink href={link}>View More</BfLink>}
      </div>
      <div className={`${style.row} row g-2 g-sm-3`}>
        {data?.map((text, i) => {
          return (
            <div key={i} className='col-xl-4 col-sm-6'>
              <BioCard text={text} index={i} />
            </div>
          )
        })}
      </div>
    </>
  )
}

HomeBio.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string
}

export default HomeBio