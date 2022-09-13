import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ResultPage } from 'antd-mobile'
import "./Result.less"

export default function Result() {
  const router = useNavigate()
  const data = useSelector(state => state.order)
  const {id} = useLocation().state
  let index = 0
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      index = i
      break;
    }
  }

  const details = [
    {
      label: '付款方式',
      value: '账户余额',
    },
    {
      label: '支付金额',
      value: '¥'+data[index].totalPrice,
    },
    {
      label: '订单编号',
      value: data[index].id,
    },
    {
      label: '订单时间',
      value: data[index].time,
    },
  ]

  return (
    <ResultPage
      status='success'
      title='下单成功'
      description='可以通过【我的】，订单中查看详情'
      details={details}
      primaryButtonText='完 成'
      onPrimaryButtonClick={() => router(-1)}
    />
  )
}
