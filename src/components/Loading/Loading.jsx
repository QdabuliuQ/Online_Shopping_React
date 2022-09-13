import React from 'react'
import "./Loading.less"
import loading from "assets/images/loading.png"

export default function Loading() {
  return (
    <div id='Loading'>
      <div className='loadingBox'>
        <img src={loading} alt="" />
        正在加载页面
      </div>
    </div>
  )
}
