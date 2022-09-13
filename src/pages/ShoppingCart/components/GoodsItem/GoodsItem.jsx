import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector, useStore } from "react-redux";
import { Checkbox, Image, Stepper, Ellipsis } from 'antd-mobile'
import { editGoodsCart } from "reduxs/actions/cart";
import "./GoodsItem.less"

export default function GoodsItem(props) {
  let flag = true
  const store = useStore()
  // const itemCheckRef = useRef()
  let { image, title, price, index } = props
  const [count, setCount] = useState(props.count)
  const [check, setCheck] = useState(props.check)

  const data = useSelector(state => state.cart)
  const dispatch = useDispatch()
  // 复选框切换
  const checkToggle = (e) => {
    flag = false
    data[index].check = e
    dispatch(editGoodsCart(data[index], index))
  }
  // 数量切换
  const settperChange = (e) => {
    data[index].count = e
    setCount(e)
    dispatch(editGoodsCart(data[index], index))
  }

  useEffect(() => {
    let unsubscribe = store.subscribe(() => {
      setCheck(data[index].check)
    })

    return () => {
      // 取消监听
      unsubscribe()
    }
  }, [])

  return (
    <div className='CartGoodsItem'>
      <div className='itemCheck'>
        <Checkbox onChange={checkToggle} checked={check} defaultChecked={check} />
      </div>
      <div className='itemImage'>
        <Image src={image} width={90} height={90} fit='contain' />
      </div>
      <div className='itemInfo'>
        <div className='itemTitle'>
          <Ellipsis direction='end' rows={2} content={title} />
        </div>
        <div className='itemOther'>
          <div className='itemPrice'>
            ￥{price * count}
          </div>
          <div className='itemCount'>
            <Stepper onChange={settperChange} defaultValue={count} min={1} max={100} />
          </div>
        </div>
      </div>
    </div>
  )
}
