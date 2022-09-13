import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./UserAddress.less"

const icon = require("assets/images/location.png")
export default function UserAddress() {
  const router = useNavigate()
  const data = useSelector(state => state.address)
  const [info, setInfo] = useState({})

  useEffect(() => {
    let flag = true
    for (const item of data) {
      if (item.default) {
        flag = false
        setInfo(item)
        break
      }
    }
    if (flag && data.length) {
      setInfo(data[0])
    }
  }, [])

  return (
    <div id='UserAddress'>
      {
        !data.length ? (
          <div onClick={() => router('/addressList')} className='addUserAddress'>
            <div className='infoContent'>
              <img src={icon} alt="" />
              暂无收货地址信息
            </div>
          </div>
        ) : (
          <div onClick={() => router('/addressList')} className='useAddressInfo'>
            <div className='topBox item'>
              <div className='itemName'>
                <span>姓名：</span>{info.name}
              </div>
              <div className='itemPhone'>
                <span>电话：</span>{info.phone}
              </div>
            </div>
            <div className='centerBox item'>
              <div className='itemLocation'>
                <span>所在地：</span>{info.location}
              </div>
            </div>
            <div className='bottomBox item'>
              <div className='itemAddress'>
                <span>详细地址：</span>{info.address}
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
