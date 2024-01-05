import React from 'react'

const Btn = ({text,icon,oncklick,className,type='button'}) => {
  return (
    <button onClick={oncklick} className={className} type={type}>{icon && icon}{text && text} </button>
  )
  
}

export default Btn