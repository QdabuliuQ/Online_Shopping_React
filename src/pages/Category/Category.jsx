import React, { useEffect, useState, useRef } from 'react'
import { SideBar } from 'antd-mobile'
import MenuInfo from "./components/MenuInfo/MenuInfo";
import SearchNav from "components/SearchNav/SearchNav";
import "./Category.less"
import { getCategory } from "network/index";

export default function Category() {
  const scrollContainerRef = useRef()
  let [list, setList] = useState([])
  let [defaultKey, setDefaultKey] = useState(0)
  let [key, setKey] = useState(0)

  useEffect(() => {
    if (!localStorage.getItem('category')) {
      getCategory().then(res => {
        setList(res.message)
        setDefaultKey(res.message[0].cat_id)
        localStorage.setItem('category', JSON.stringify(res.message))
      })
    } else {
      let res = JSON.parse(localStorage.getItem('category'))
      setList(res)
      setDefaultKey(res[0].cat_id)
    }
  }, [])

  function keyChangeEvent(key) {
    setKey(key)
    setTimeout(() => {
      scrollContainerRef.current.scrollTo(0,0)
    }, 0);
  }

  return (
    <div id='Category'>
      <SearchNav />
      <div className='sliderContainer'>
        <div className='leftSlider'>
          <SideBar onChange={keyChangeEvent} defaultActiveKey={'0'}>
            {list.map((item,index) => (
            <SideBar.Item key={index} title={item.cat_name} />
          ))}
          </SideBar>
        </div>
        <div ref={scrollContainerRef} className='rightContent'>
          <MenuInfo item={list[key] ? list[key].children : null} />
        </div>
      </div>
    </div>
  )
}
