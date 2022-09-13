import React, { useState, useEffect } from 'react'
import { Tabs, ErrorBlock } from 'antd-mobile'
import { useLocation } from "react-router-dom";
import { useSelector, useStore } from "react-redux";
import Navbar from "components/Navbar/Navbar";
import OrderItem from "./components/OrderItem/OrderItem";
import "./OrderList.less"

export default function OrderList(props) {
  const store = useStore()
  const data = useSelector(state => state.order)
  const [status, setStatus] = useState('0')
  const [list, setList] = useState([])
  let s = useLocation().state.status
  // 获取数据
  const getData = (e) => {
    if (e == -1) {
      setList(data)
    } else {
      let temp = []
      for (const item of data) {
        if (item.status == e) {
          temp.push(item)
        }
      }
      setList(temp)
    }
  }
  // tab切换
  const statusChange = (e) => {
    setStatus(e)
    getData(e)
  }

  useEffect(() => {
    getData(s)

    let unsubscribe = store.subscribe(() => {
      setList([])
      getData(status)
    })

    setStatus(s.toString())

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div id='OrderList'>
      <Navbar bacK='' title='我的订单' />
      <Tabs activeKey={status} onChange={statusChange}>
        <Tabs.Tab title='全部订单' key='-1' />
        <Tabs.Tab title='未支付' key='0' />
        <Tabs.Tab title='待收货' key='1' />
        <Tabs.Tab title='已完成' key='2' />
      </Tabs>
      <div className='listContainer'>
        {
          list.length ? (
            list.map((item, index) => (
              <OrderItem key={index} {...item} />
            ))
          ) : (
            <ErrorBlock
              title='暂无订单信息'
              description=''
              image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
              style={{
                '--image-height': '150px',
                marginTop: '20px',
              }}>
            </ErrorBlock>
          )
        }
      </div>
    </div>
  )
}
