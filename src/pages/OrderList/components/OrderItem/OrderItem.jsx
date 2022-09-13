import React from 'react'
import { Image, Ellipsis } from 'antd-mobile'
import OrderOperation from "../OrderOperation/OrderOperation";
import "./OrderItem.less"

export default function OrderItem(props) {
  console.log(props);
  const {goods, id, status, time, totalPrice} = props
  return (
    <div className='OrderItem'>
      {
        goods.map(item => (
          <div key={item.goods_id} className='orderGodds'>
            <div className='leftContent'>
              <Image src={item.goods_big_logo} width={100} height={100} fit='contain' />
            </div>
            <div className='rightContent'>
              <div className='title'>
                <Ellipsis direction='end' rows={2} content={item.goods_name} />
              </div>
              <div className='info'>
                <span className='price'>￥{item.goods_price}</span>
                <span>×{item.count}</span>
              </div>
              <div className='otherInfo'>
                <span>总价：</span>
                <span className='price'>￥{item.goods_price * item.count}</span>
              </div>
            </div>
          </div>
        ))
      }
      <div className='orderInfo'>
        <div className='infoItem'>
          <div className='title'>订单编号</div>
          <div className='data'>{id}</div>
        </div>
        <div className='infoItem'>
          <div className='title'>订单时间</div>
          <div className='data'>{time}</div>
        </div>
      </div>
      <div className='totalPrice'>
        <div>
          实付：<span>￥{totalPrice}</span>
        </div>
      </div>
      <OrderOperation status={status} id={id} />
    </div>
  )
}
