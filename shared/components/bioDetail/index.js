import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'

import style from "./style.module.scss"

const InnerSection = dynamic(() => import('@shared/components/innerSection'))
const Advertisement = dynamic(() => import('@shared/components/advertisement'))
const BioCardFooter = dynamic(() => import('@shared/components/bioCard/footer'))
const LazyLoad = dynamic(() => import('@shared/components/lazyLoad'))
const RelatedBio = dynamic(() => import('@shared/components/relatedBio'))

function BioDetail({ seo }) {
  return (
    <InnerSection seo={seo} isMobileFooter>
      <div className='row'>
        <div className='col-xxl-9 col-lg-8'>
          <div className={style.card}>
            <h2>There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.</h2>
            <BioCardFooter className={style.action} />
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
            <RelatedBio/>
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
