import React, { useEffect, useRef } from 'react'
import { NavBar, Input, ErrorBlock } from 'antd-mobile'
import { useNavigate } from "react-router-dom";
import SearchItem from "./components/SearchItem/SearchItem"
import { getSearchResult } from "network/index";
import "./Search.less"
import { useState } from 'react';

let timer;
export default function Search() {
  const router = useNavigate()
  const inputRef = useRef()
  const [resultList, setResult] = useState([])

  const back = () => {
    router(-1)
  }
  const inputChange = (e) => {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      if (e == '') {
        setResult([])
      } else {
        getData(e)
      }
      
    }, 500);
  }
  const getData = (query) => {
    getSearchResult({
      query
    }).then(res => {
      setResult(res.message)
    })
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div id='Search'>
      <NavBar onBack={back}>搜索中心</NavBar>
      <div className='inputContainer'>
        <Input ref={inputRef} onChange={(e) => inputChange(e)} placeholder='请输入商品信息' clearable />
      </div>
      <div className='resultContainer'>
        {
          resultList.length ? resultList.map(item => (
            <SearchItem key={item.goods_id} goods_id={item.goods_id} goods_name={item.goods_name} />
          )) : <ErrorBlock status='empty' />
        }
      </div>
    </div>
  )
}
