import React, { useEffect, useState } from 'react'
import { getNavList } from "network/index";
import "./HomeNav.less"

export default function HomeNav() {
  let [navList, setNav] = useState([])
  
  useEffect(() => {
    getNavList().then(res => {
      setNav(res.message)
    })
  }, [])

  return (
    <div id='HomeNav'>
      {
        navList.map(item => {
          return (
            <div key={item.image_src} className='navItem'>
              <img src={item.image_src} alt="" />
            </div>
          )
        })
      }
    </div>
  )
}
