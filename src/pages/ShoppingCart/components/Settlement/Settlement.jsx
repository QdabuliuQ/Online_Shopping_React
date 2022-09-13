import React, { useEffect, useState } from 'react'
import { Checkbox, Toast } from 'antd-mobile'
import { useNavigate } from "react-router-dom";
import { useStore, useSelector, useDispatch } from "react-redux";
import { editAllGoodsCart } from "reduxs/actions/cart";
import "./Settlement.less"

let timer;
export default function Settlement() {
  const store = useStore()
  const router = useNavigate()
  const dispatch = useDispatch()
  const data = useSelector(state => state.cart)
  const address = useSelector(state => state.address)

  const [allSelect, setAllSelect] = useState(false)
  const [totalSelect, setTotalSelect] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  
  useEffect(() => {
    // 监听redux数据变化
    let flag = true
    store.subscribe(() => {
      flag = false
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        getData()
      }, 300);
    })
    if (flag) {
      getData()
    }
  }, [])

  const getData = () => {
    let total = 0, price = 0, select = 0, itemAllSelect = true
    for(let item of data) {
      if (!item.check && itemAllSelect) {
        itemAllSelect = false
      }
      if (item.check) {
        select ++
        total += item.count
        price += item.goods_price * item.count
      }
    }
    setAllSelect(itemAllSelect)
    setTotalSelect(total)
    setTotalPrice(price)
  }

  const selectChange = (e) => {
    if (data.length) {
      for (const item of data) {
        item.check = e
      }
      setAllSelect(e)
      dispatch(editAllGoodsCart(data))
    }
  } 
  
  const toPage = () => {
    if (totalSelect > 0) {
      if (address.length > 0) {
        router('/order')
      } else {
        Toast.show({
          icon: 'fail',
          content: '请添加收货地址',
        })
      }
    }
  }
    
  return (
    <div id='Settlement'>
      <div className='settleContainer'>
        <div>
          <Checkbox onChange={selectChange} checked={allSelect}>全选</Checkbox>
        </div>
        <div className='rightContainer'>
          <div className='totalPrice'>
            合计:<span>￥{totalPrice}</span>
          </div>
          <div onClick={toPage} className='settleBtn'>
            结算({totalSelect})
          </div>
        </div>
      </div>
    </div>
  )
}
