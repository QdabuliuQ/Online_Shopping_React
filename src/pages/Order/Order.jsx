import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { Image, Ellipsis, Toast } from 'antd-mobile'
import Navbar from "components/Navbar/Navbar";
import UserAddress from "pages/ShoppingCart/components/UserAddress/UserAddress";
import OrderGoodsItem from "./components/OrderGoodsItem/OrderGoodsItem";
import OrderSettlement from "./components/OrderSettlement/OrderSettlement";
import { addOrder } from "reduxs/actions/order";
import { deleteGoodsCart } from "reduxs/actions/cart";
import "./Order.less"

export default function Order() {
  const router = useNavigate()
  const dispatch = useDispatch()
  const data = useSelector(state => state.cart)
  let id = nanoid()
  const [price, setPrice] = useState(0)
  const [list, setList] = useState([])
  useEffect(() => {
    let temp = [], p = 0
    for (const item of data) {
      if (item.check) {
        temp.push(item)
        p += item.goods_price * item.count
      }
    }
    setPrice(p)
    setList(temp)
  }, [])

  // 创建时间
  const createTime = () => {
    let date = new Date()
    let y = date.getFullYear()
    let m = (date.getMonth() + 1 + '').padStart(2, '0')
    let d = (date.getDate() + '').padStart(2, '0')

    let h = (date.getHours() + '').padStart(2, '0')
    let min = (date.getMinutes() + '').padStart(2, '0')
    let s = (date.getSeconds() + '').padStart(2, '0')
    return `${y}-${m}-${d} ${h}:${min}:${s}`
  }

  const setOrderInfo = (status) => {
    let obj = {
      goods: list,
      totalPrice: price,
      status,
      id,
      time: createTime()
    }
    let deleteIds = []
    for (const item of list) {
      deleteIds.push(item.goods_id)
    }
    // 删除购物车相关商品
    dispatch(deleteGoodsCart(deleteIds))
    return obj
  }

  // 创建未支付类型订单
  const createUnpayOrder = () => {
    Toast.show({
      icon: 'loading',
      content: '加载中…',
    })
    // 生成未支付订单
    dispatch(addOrder(setOrderInfo(0)))
    setTimeout(() => {
      Toast.clear()
      router(-1)
    }, 200);
  }

  // 创建已经支付完成的订单
  const createPayedOrder = () => {
    Toast.show({
      icon: 'loading',
      content: '加载中…',
    })
    dispatch(addOrder(setOrderInfo(1)))
    setTimeout(() => {
      Toast.clear()
      router('/result', {
        replace: true,
        state: {
          id
        }
      })
    }, 200);
  }

  return (
    <div id='Order'>
      <Navbar onBack={createUnpayOrder} title='订单' back='' />
      <UserAddress />
      <div className='goodsItemList'>
        {
          list.map((item,index) => (
            <OrderGoodsItem 
              key={index}
              title={item.goods_name}
              price={item.goods_price}
              count={item.count}
              image={item.goods_small_logo} />
          ))
        }
      </div>
      <OrderSettlement createPayedOrder={createPayedOrder} price={price} />
    </div>
  )
}
