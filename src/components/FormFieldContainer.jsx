import React from 'react'

const FormFieldContainer = ({ children, styles }) => {
  return (
    <div className={styles}>
        {children}
    </div>
  )
}

export default FormFieldContainer