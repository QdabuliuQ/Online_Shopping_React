import React, { useState, useEffect  } from 'react'
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { TabBar } from 'antd-mobile'
import Icon from "components/Icon/Icon";
import "./NavPages.less"

export default function NavPages() {
  // tabbar
  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: <Icon icon={require('../../assets/images/home.png')} />,
      activeIcon: <Icon icon={require('../../assets/images/home_active.png')} />,
    },
    {
      key: '/category',
      title: '分类',
      icon: <Icon icon={require('../../assets/images/category.png')} />,
      activeIcon: <Icon icon={require('../../assets/images/category_active.png')} />,
    },
    {
      key: '/shoppingCart',
      title: '购物车',
      icon: <Icon icon={require('../../assets/images/shoppingCart.png')} />,
      activeIcon: <Icon icon={require('../../assets/images/shoppingCart_active.png')} />,
    },
    {
      key: '/profile',
      title: '我的',
      icon: <Icon icon={require('../../assets/images/profile.png')} />,
      activeIcon: <Icon icon={require('../../assets/images/profile_active.png')} />,
    },
  ]
  // 路由跳转
  const router = useNavigate()
  // tabbar激活key
  let [key, setKey] = useState('home')
  let path = useLocation().pathname
  useEffect(() => {
    // 在生命周期中 获取路由路径
    setKey(path.substring(6))
  }, [])

  // 切换tabbar
  const setTabbar = (value) => {
    console.log();
    setKey(value)
    // 路由跳转
    router(value.substring(1))
  }

  return (
    <div id='NavPages'>
      <div id='routerContainer'>
        <Outlet />
      </div>
      <TabBar onChange={value => setTabbar(value)} activeKey={key}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={key == item.key ? item.activeIcon : item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  )
}
