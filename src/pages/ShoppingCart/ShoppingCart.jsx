import React from 'react'
import { ErrorBlock } from 'antd-mobile'
import { useSelector } from "react-redux";
import Navbar from "components/Navbar/Navbar";
import UserAddress from "./components/UserAddress/UserAddress";
import GoodsItem from "./components/GoodsItem/GoodsItem";
import Settlement from "./components/Settlement/Settlement";
import "./ShoppingCart.less"

export default function ShoppingCart() {
  const data = useSelector(state => state.cart)
  return (
    <div id='ShoppingCart'>
      <Navbar title='购物车' back={null} />
      <div className='cartContent'>
        <UserAddress />
        {
          data.length ? (
            <div className='goodsContainer'>
              {
                data.map((item, index) => (
                  <GoodsItem
                    index={index}
                    key={index}
                    check={item.check}
                    title={item.goods_name}
                    price={item.goods_price}
                    count={item.count}
                    image={item.goods_small_logo} />
                ))
              }
            </div>
          ) : (
            <ErrorBlock
              title='购物车空空如也'
              description=''
              image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
              style={{
                '--image-height': '150px',
                marginBottom: '20px'
              }}>
            </ErrorBlock>
          )
        }
      </div>
      <Settlement />
    </div>
  )
}
