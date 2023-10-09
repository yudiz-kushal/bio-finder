import Link from 'next/link'
import PropTypes from 'prop-types'

import style from './style.module.scss'

function InnerSection({ children, seo, isMobileFooter }) {
  return (
    <>
      <section className={`py-4 py-md-5 text-center ${style.innerBanner}`}>
        <div className='container'>
          <h1>{seo?.sTitle}</h1>
          <ol className={`${style.breadcrumb} d-flex align-items-center justify-content-center m-0`}>
            <li><Link href='/' prefetch={false}>Home</Link></li>
            <li>Tinder Bio</li>
          </ol>
        </div>
      </section>
      <section className={`pt-md-5  ${isMobileFooter ? 'hasFooter' : ''}`}>
        <div className='container'>
          {children}
        </div>
      </section>
    </>
  )
}
InnerSection.propTypes = {
  children: PropTypes.node.isRequired,
  seo: PropTypes.object.isRequired,
  isMobileFooter: PropTypes.bool
}
export default InnerSection