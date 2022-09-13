import React from 'react'
import "./OrderSettlement.less"

export default function OrderSettlement(props) {
  const {price, createPayedOrder} = props

  return (
    <div id='OrderSettlement'>
      <div className='settleBox'>
        <div className='price'>
          合计：
          <span>￥{price}</span>
        </div>
        <div onClick={() => createPayedOrder()} className='btn'>
          支付
        </div>
      </div>
    </div>
  )
}
