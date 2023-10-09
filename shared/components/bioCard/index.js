import dynamic from 'next/dynamic'
import Link from 'next/link'
import PropTypes from 'prop-types'


// import style from './style.module.scss'

const BioCardFooter = dynamic(() => import('@shared/components/bioCard/footer'))

function BioCard({ text }) {
  return (
    <div className="b-card h-100">
      <div className="b-content position-relative">
        <p className="b-title mb-0">{text}</p>
        <p className="b-sub-title mb-0">Jeff Atwood</p>
        <Link href="/tinder-bio/abc" prefetch={false} className="b-link" title="There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.">There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.</Link>
      </div>
      <BioCardFooter text={text} />
    </div>
  )
}
BioCard.propTypes = {
  text: PropTypes.string,
}
export default BioCard