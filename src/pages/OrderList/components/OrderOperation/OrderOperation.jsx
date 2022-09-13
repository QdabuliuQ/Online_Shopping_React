import React from 'react'
import { Toast } from 'antd-mobile'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editOrderStatusByid } from "reduxs/actions/order";
import "./OrderOperation.less";

export default function OrderOperation(props) {
  const dispatch = useDispatch()
  const data = useSelector(state => state.order)

  const { status, id } = props
  const router = useNavigate()
  const setOrderStatus = (status) => {
    Toast.show({
      icon: 'loading',
      content: '加载中…',
    })
    let d = null
    for (const item of data) {
      if (item.id == id) {
        item.status = status
        d = item
        break;
      }
    }
    dispatch(editOrderStatusByid(d, id))
    setTimeout(() => {
      Toast.clear()
      if (status == 1) {
        router('/result', {
          state: {
            id
          }
        })
      }
    }, 300);
  }

  return (
    <div className='OrderOperation'>
      {
        status == 0 && <div onClick={() => setOrderStatus(1)} className='operationBtn'>
          支付
        </div>
      }
      {
        status == 1 && <div onClick={() => setOrderStatus(2)} className='operationBtn'>
          确认收货
        </div>
      }
    </div>
  )
}
