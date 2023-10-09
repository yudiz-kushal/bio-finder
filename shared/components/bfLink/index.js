import PropTypes from 'prop-types'
import Link from 'next/link'

import style from './style.module.scss'

function BfLink({ children, className = '', ...rest }) {
  return (
    <>
      <Link className={`${style.link} ${className}`} title={children} prefetch={false} {...rest}>
        {children}
      </Link>
    </>
  )
}
BfLink.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
}
export default BfLink