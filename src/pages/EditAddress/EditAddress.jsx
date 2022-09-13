import React, { useState } from 'react'
import { Form, Input, Cascader, Switch, Button, Toast } from 'antd-mobile'
import { useDispatch, useSelector, useStore } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAddress, editAllAddress } from "reduxs/actions/address";
import Navbar from "components/Navbar/Navbar";
import province from "utils/province";
import "./EditAddress.less"

export default function EditAddress() {
  const router = useNavigate()
  const dispatch = useDispatch()
  const data = useSelector(state => state.address)
  const store = useStore()
  const [visible, setVisible] = useState(false)
  const [location, setLocation] = useState(' ')
  const [checked, setChecked] = useState(false)

  const cascaderConfirm = (e,{items}) => {
    let str = ''
    for (const item of items) {
      str += item.label + ' '
    }
    setLocation(str)
  }
  const onFinish = (e) => {
    // 添加地址
    if (location != '') {
      // 修改redux数据
      dispatch(addAddress({
        ...e,
        location,
        default: checked
      }))
      Toast.show({
        icon: 'success',
        content: '保存地址成功'
      })
      // 如果设置为默认地址 则将其他设置为不是默认
      if (checked) {
        let { address } = store.getState()
        if (address.length > 1) {
          for (let i = 1; i < address.length; i++) {
            address[i].default = false
          }
          dispatch(editAllAddress(address))
        }
      }
      setTimeout(() => {
        router(-1)
      }, 1000);
    } else {
      Toast.show({
        icon: 'fail',
        content: '输入内容不能为空',
      })
    }
    console.log(e, location, checked);
  }

  return (
    <div className='EditAddress'>
      <Navbar title='地址编辑' back='' />
      <div>
        <Form 
          layout='horizontal' 
          mode='card'
          onFinish={onFinish}
          onFinishFailed={() => {
            Toast.show({
              icon: 'fail',
              content: '输入内容不能为空',
            })
          }}
          footer={
            <Button block type='submit' color='primary' size='large'>
              保存
            </Button>
          }>
          <Form.Item 
            name='name'
            rules={[{ required: true, message: '姓名不能为空' }]}
            label='姓名'>
            <Input placeholder='请输入姓名' />
          </Form.Item>
          <Form.Item 
            name='phone'
            rules={[{ required: true, message: '手机号不能为空' }]}
            label='手机号'>
            <Input placeholder='请输入手机号' />
          </Form.Item>
          <Form.Item 
            required={true}
            rules={[]}
            label='所在地' 
            trigger='onConfirm'>
            <Cascader
              options={province}
              visible={visible}
              arrow={true}
              onClose={() => {
                setVisible(false)
              }}
              onConfirm={cascaderConfirm}
            />
            <div onClick={() => setVisible(true)} className='clickContent'>
              <span>{location}</span>
              <img src={require('assets/images/right.png')} alt="" />
            </div>
          </Form.Item>
          <Form.Item
            name='address'
            rules={[{ required: true, message: '详细地址不能为空' }]} 
            label='详细地址'>
            <Input placeholder='请输入详细地址' />
          </Form.Item>
          <Form.Item
            label='默认地址'
            childElementPosition='right'
          >
            <Switch onChange={(e) => setChecked(e)} checked={checked} />
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
