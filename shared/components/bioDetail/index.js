'use client'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import style from "./style.module.scss"
import { allBios } from '@shared/api/allBios'
import { shuffleArray } from '@shared/utils'
import { blurImagesFemale, blurImagesMan } from '@shared/utils/images'
import { useEffect, useState } from 'react'

const InnerSection = dynamic(() => import('@shared/components/innerSection'))
const Advertisement = dynamic(() => import('@shared/components/advertisement'))
const BioCardFooter = dynamic(() => import('@shared/components/bioCard/footer'))
const LazyLoad = dynamic(() => import('@shared/components/lazyLoad'))
const RelatedBio = dynamic(() => import('@shared/components/relatedBio'))

function BioDetail({ seo, data }) {
  const router = useRouter()
  const [bioDeatils, setBioDeatils] = useState()

  useEffect(() => {
    if (data) {
      data?.find((text, i) => {
        if (i === +router.query.slug[1]) {
          return setBioDeatils(text)
        }
      })
    }
  }, [data])

  return (
    <InnerSection seo={seo} isMobileFooter>
      <div className='row'>
        <div className='col-xxl-9 col-lg-8'>
          <div className={style.card}>
            <div className='d-flex justify-content-between p-2'>
              <h2>{bioDeatils?.aProfileFields?.sDisplayText}</h2>
              <BioCardFooter className={`${style.action} b-cardFooter`} bCardButtonFooter={"b-CardButtonFooter"} />
            </div>
            <ul className={`${style.tags} m-0`}>
              <li>#passiong</li>
              <li>#sexy</li>
              <li>#trust</li>
              <li>#alone</li>
              <li>#bff</li>
              <li>#foodie</li>
              <li>#introword</li>
            </ul>
          </div>
          <LazyLoad>
            <RelatedBio data={data} />
          </LazyLoad>
        </div>
        <div className="col-xxl-3 col-lg-4 d-none d-lg-block">
          <Advertisement />
        </div>
      </div>
    </InnerSection>
  )
}
BioDetail.propTypes = {
  seo: PropTypes.object.isRequired
}
export default BioDetail