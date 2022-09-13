import React from 'react'
import { Image, Ellipsis } from 'antd-mobile'
import { useNavigate } from "react-router-dom";
import "./GoodsItem.less"

export default function GoodsItem(props) {
  const { id, image, title, price, count } = props
  const router = useNavigate()

  return (
    <div onClick={() => router('/detail', {
      state: {
        id
      }
    })} className='GoodsItem'>
      <div className='itemLeft'>
        <Image src={image} width={100} height={100} fit='contain' />
      </div>
      <div className='itemRight'>
        <div>
          <div className='itemTitle'>
            <Ellipsis direction='end' rows={2} content={title} />
          </div>
          <div className='itemPrice'>￥{price}</div>
          <div className='itemCount'>剩余库存：{count}</div>
        </div>
      </div>
    </div>
  )
}
