import React, { useState, useEffect } from 'react'
import { Checkbox } from 'antd-mobile'
import PubSub from 'pubsub-js'
import { useDispatch, useSelector, useStore } from "react-redux";
import { editAddress } from "reduxs/actions/address";
import "./AddressItem.less"

export default function AddressItem(props) {
  const [check, setCheck] = useState(props.check)
  const dispatch = useDispatch()
  const store = useStore()
  const data = useSelector(state => state.address)
  const {name, location, address, phone, index} = props

  const setItemDefault = (e) => {
    setCheck(e)
    if (e) {
      data[index].default = true
      PubSub.publish('changeDefault', index)
    } else {
      data[index].default = false
    }
    dispatch(editAddress(data[index], index))
  }

  useEffect(() => {
    PubSub.subscribe('changeDefault', (msg, i) => {
      if (i != index) {
        setCheck(false)
        data[index].default = false
        dispatch(editAddress(data[index], index))
      }
    })
  }, [])

  return (
    <div className='AddressItem'>
      <div className='topBox item'>
        <div className='itemName'>
          <span>姓名：</span>{name}
        </div>
        <div className='itemPhone'>
          <span>电话：</span>{phone}
        </div>
      </div>
      <div className='centerBox item'>
        <div className='itemLocation'>
          <span>所在地：</span>{location}
        </div>
      </div>
      <div className='bottomBox item'>
        <div className='itemAddress'>
          <span>详细地址：</span>{address}
        </div>
      </div>
      <div className='opeBox'>
        <div className='checkItem'>
          <Checkbox onChange={setItemDefault} checked={check}>默认地址</Checkbox>
        </div>
        <div className='deleteItem'>
          <span>删除</span>
        </div>
      </div>
    </div>
  )
}
