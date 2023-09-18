import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { APP_NAME } from 'constants/app.constant'

const LOGO_SRC_PATH = '/img/logo/'

const Logo = props => {

	const { 
		type, 
		mode, 
		gutter, 
		className,
		imgClass,
		style, 
		logoWidth 
	} = props

	return (
		<div 
			className={classNames('logo', className, gutter)} 
			style={
				{
					...style,
					...{width: logoWidth}
				}
			}
		>
			<span className='flex flex-row justify-center items-center' >

				<h4 className='text-2xl font-sans' >
					Island
				</h4>
				<h3 className=' font-sans text-3xl text-violet-900' >
					Vacation
				</h3>
			</span>
		</div>
	)
}

Logo.defaultProps = {
	mode: 'light',
	type: 'full',
	logoWidth: 'auto'
}

Logo.propTypes = {
	mode: PropTypes.oneOf(['light', 'dark']),
	type: PropTypes.oneOf(['full', 'streamline']),
	gutter: PropTypes.string,
	imgClass: PropTypes.string,
	logoWidth: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
}

export default Logo
