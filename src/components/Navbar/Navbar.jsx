import React, { useEffect, useRef, useState } from 'react'
import { NavBar } from 'antd-mobile'
import { useNavigate } from "react-router-dom";
import "./Navbar.less"

export default function Navbar(props) {
  const router = useNavigate()

  const {title} = props
  const [height, setHeight] = useState(0)
  useEffect(() => {
    setHeight(document.getElementsByClassName('navbar')[0].clientHeight)
  }, [])
  return (
    <div id='Navbar'>
      <NavBar onBack={() => router(-1)} className='navbar' {...props}>
        {title}
      </NavBar>
      <div style={{
        height: height+'px'
      }}></div>
    </div>
  )
}
