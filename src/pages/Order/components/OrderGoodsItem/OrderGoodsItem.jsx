import React from 'react'
import { Image, Ellipsis } from 'antd-mobile'
import "./OrderGoodsItem.less"

export default function OrderGoodsItem(props) {
  const {title, price, count, image} = props
  return (
    <div className='OrderGoodsItem'>
      <div className='leftBox'>
        <Image src={image} width={100} height={100} fit='contain' />
      </div>
      <div className='rightBox'>
        <div className='topBox'>
          <Ellipsis direction='end' rows={2} content={title} />
        </div>
        <div className='bottomBox'>
          <span className='price'>￥{price}</span>
          <span>×{count}</span>
        </div>
        <div className='totalPrice'>
          <span>总价：</span>
          <span className='price'>￥{price * count}</span>
        </div>
      </div>
    </div>
  )
}
