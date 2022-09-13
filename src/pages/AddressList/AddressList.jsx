import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ErrorBlock } from 'antd-mobile'
import { useDispatch, useSelector } from "react-redux";
import Navbar from "components/Navbar/Navbar";
import AddressItem from "./components/AddressItem/AddressItem";
import "./AddressList.less"

const plus = require('assets/images/plus.png')
export default function AddressList() {
  const router = useNavigate()
  const dispatch = useDispatch()
  const [data, setData] = useState(useSelector(state => state.address))
  console.log(data);
  return (
    <div id='AddressList'>
      <Navbar right={
        <img onClick={() => router('/editAddress')} style={{width: '23px', position: 'relative', top: '1px'}} src={plus} alt="" />
      } title='收货地址' back='' />
      <div className='addressContainer'>
        {
          data.length ? (
            data.map((item,index) => (
              <AddressItem key={index} index={index} check={item.default} name={item.name} location={item.location} address={item.address} phone={item.phone} />
            ))
          ) : (
            <ErrorBlock
              title='暂无地址'
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
    </div>
  )
}
