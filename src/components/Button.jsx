import React from 'react'

const Button = ({type, styles, text}) => {
  return (
    <button
        type={type}
        className={styles}
      >
        {text}
      </button>
  )
}

export default Button