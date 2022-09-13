import React from 'react'
import "./DetailTabbar.less"
import { useDispatch } from "react-redux";
import { addGoodsCart } from "reduxs/actions/cart";
import { Toast } from 'antd-mobile'

export default function DetailTabbar(props) {
  const {info} = props
  // useDispatch用于修改redux中的数据
  const dispatch = useDispatch()
  // useSelector用于获取redux的数据
  // const data = useSelector(state => state.cart)
  const addGodds = () => {
    info.check = false
    info.count = 1
    dispatch(addGoodsCart(info))
    Toast.show({
      icon: 'success',
      content: '添加成功',
    })
  }

  return (
    <div id='DetailTabbar'>
      <div className='tabbarContainer'>
        <div onClick={addGodds} className='tabbarBtn leftTabbar'>
          加入购物车
        </div>
        <div className='tabbarBtn rightTabbar'>
          立即购买
        </div>
      </div>
    </div>
  )
}
