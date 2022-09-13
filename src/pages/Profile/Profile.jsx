import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
import "./Profile.less"

export default function Profile() {
  const router = useNavigate()

  return (
    <div id='Profile'>
      <Navbar back={null} title='我的' />
      <div className='orderList'>
        <div onClick={() => router('/orderList', {
          state: {
            status: '-1'
          }
        })} className='orderItem'>
          <span>
            全部订单
          </span>
          <img src={require('assets/images/right.png')} alt="" />
        </div>
        <div onClick={() => router('/orderList', {
          state: {
            status: '0'
          }
        })} className='orderItem'>
          <span>
            未支付
          </span>
          <img src={require('assets/images/right.png')} alt="" />
        </div>
        <div onClick={() => router('/orderList', {
          state: {
            status: '1'
          }
        })} className='orderItem'>
          <span>
            待收货
          </span>
          <img src={require('assets/images/right.png')} alt="" />
        </div>
        <div onClick={() => router('/orderList', {
          state: {
            status: '2'
          }
        })} className='orderItem'>
          <span>
            已完成
          </span>
          <img src={require('assets/images/right.png')} alt="" />
        </div>
      </div>
    </div>
  )
}
