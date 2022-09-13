import React from 'react'
import "./Icon.less"

export default function Icon(props) {
  return (
    <div style={{width: props.size, height: props.size}} className='Icon'>
      <img src={props.icon} alt="" />
    </div>
  )
}
