import React from 'react'
import '../Styles/Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn-hover', 'btn--outline', 'btn--test']

const SIZES = ['btn--medium', 'btn--large', 'btn--small']

export const Button = ({
   id,
   children,
   type,
   onClick,
   buttonStyle,
   buttonSize,
   to,
   tooltipSentence,
   style
}) => {
   const checkButtonStyle = STYLES.includes(buttonStyle)
      ? buttonStyle
      : STYLES[0]

   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

   return (
      <Link to={to} className="btn-mobile">
         <button
            data-tip={tooltipSentence}
            id={id}
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            style={{ style }}
         >
            {children}
         </button>
      </Link>
   )
}
