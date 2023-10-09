import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'

import style from "./style.module.scss"

const Heading = dynamic(() => import('@shared/components/heading'))
const BfLink = dynamic(() => import('@shared/components/bfLink'))
const BioCard = dynamic(() => import('@shared/components/bioCard'))

function HomeBio({ title, link, className = '' }) {
  const data = [
    `Pursuing CMA
    Chubby
    Open minded 
    Introvert but I can talk about F.R.I.E.N.D.S endlessly
    I'll prefer old monk everytime`,
    'Too chubby for you🤎',
    `I’m chubby, short, soft and fluffy😂
    Let’s have a good time and make new friends 🫥
    I’m always up for a drive`,
    `Chubby
    Marwari
    1 year anniversary in the city of dreams
    Films
    coffee
    FRIENDS`,
    `Lazy ass bitch💫
    Thick thighs and pretty eyes 
    5'3
    • cute and CHUBBY
    P.S. I'm the old-school lover type`,
    `software developer
    plus size
    chubby`
  ]
  return (
    <>
      <div className={`d-flex align-items-center justify-content-between mb-4 ${className}`}>
        <Heading tag="h2" small className='mb-0'>{title}</Heading>
        {link && <BfLink href={link}>View More</BfLink>}
      </div>
      <div className={`${style.row} row g-2 g-sm-3`}>
        {data.map((d, i) => {
          return (
            <div key={i} className='col-xl-4 col-sm-6'>
              <BioCard text={d} />
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