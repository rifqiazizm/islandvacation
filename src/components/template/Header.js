import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { HEADER_HEIGHT_CLASS } from 'constants/theme.constant'
import useResponsive from '../../utils/hooks/useResponsive'


const Header = props => {

	const { headerStart, headerEnd, headerMiddle, className, container,logo } = props

	const  { larger } = useResponsive()

	return (
		<header className={classNames('header', className)}>
			<div 
				className={
					classNames(
						'header-wrapper', 
						HEADER_HEIGHT_CLASS,
						container && 'container mx-auto'
					)
				}
			>
				<div className="header-action header-action-start">
					{headerStart}
				</div>
				{
					larger.md && headerMiddle ? (
						<div className="header-action header-action-middle">
							{headerMiddle}
							{/* <h2>cekk</h2> */}
						</div>
					) : logo
				}
				{/* <div className="header-action header-action-end">
					{headerEnd}
				</div> */}
			</div>
		</header>
	)
}

Header.propTypes = {
	headerStart: PropTypes.node,
	headerEnd: PropTypes.node,
	container: PropTypes.bool
}

export default Header
