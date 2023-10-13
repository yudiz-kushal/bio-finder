import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'

import style from "./style.module.scss"

const Heading = dynamic(() => import('@shared/components/heading'))
const BfLink = dynamic(() => import('@shared/components/bfLink'))
const BioCard = dynamic(() => import('@shared/components/bioCard'))

function HomeBio({ title, link, className = '', data }) {
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