
import PropTypes from 'prop-types'
import style from './style.module.scss'

function Heading({ children, small, tag, className = '', ...rest }) {
  const TagName = tag || 'h2'
  return (
    <TagName
      className={`${style.heading} ${small ? style.small : ''} ${className} d-table`}
      {...rest}
    >
      {children}
    </TagName>
  )
}
Heading.propTypes = {
  children: PropTypes.string.isRequired,
  tag: PropTypes.string,
  className: PropTypes.string,
  small: PropTypes.bool
}
export default Heading