import React from 'react'
import "./DetailDesc.less"

export default function DetailDesc(props) {
  const {desc} = props
  return (
    <div id='DetailDesc'>
      <div className='title'>商品详情</div>
      <div dangerouslySetInnerHTML={{__html: desc}}></div>
    </div>
  )
}
