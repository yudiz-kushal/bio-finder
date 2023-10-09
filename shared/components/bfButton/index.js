
import PropTypes from 'prop-types'
import style from './style.module.scss'

function BfButton({ children, type = 'primary', className = '', ...rest }) {
	return (
		<button
			className={`${className} ${style[type]} ${style.btn}`}
			title={children}
		>
			{children}
		</button>
	)
}
BfButton.propTypes = {
	children: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['primary', 'secondary']),
	className: PropTypes.string
}
export default BfButton