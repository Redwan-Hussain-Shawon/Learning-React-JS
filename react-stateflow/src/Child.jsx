
import React from 'react'

export const Child = ({name, onChange}) => {
  return (
  
    <input
      className=""
      placeholder="enter "
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

