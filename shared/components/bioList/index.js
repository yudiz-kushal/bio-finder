import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'

const InnerSection = dynamic(() => import('@shared/components/innerSection'))
const Advertisement = dynamic(() => import('@shared/components/advertisement'))
const BioCard = dynamic(() => import('@shared/components/bioCard'))

function BioList({ seo }) {
  return (
    <InnerSection seo={seo}>
      <div className='row'>
        <div className='col-lg-9'>
          <div className='row g-3'>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((a) => {
              return (
                <div className='col-xl-4 col-sm-6' key={a}>
                  <BioCard />
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
