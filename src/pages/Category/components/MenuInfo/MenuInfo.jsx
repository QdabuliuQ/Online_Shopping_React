import React from 'react'
import { useNavigate } from "react-router-dom";
import "./MenuInfo.less"

export default function MenuInfo(props) {
  const router = useNavigate()
  const { item } = props

  return (
    <div id='MenuInfo'>
      {
        item ? item.map(cateItem => (
          <div className='infoItem' key={cateItem.cat_id}>
            <div className='infoTitle'>
              {cateItem.children ? cateItem.cat_name : ''}
            </div>
            <div className='infoContent'>
              {
                cateItem.children ? cateItem.children.map(cItem => (
                  <div onClick={() => router('/goodsList', {
                    state: {
                      cat_id: cItem.cat_id
                    } 
                  })} key={cItem.cat_id} className='contentItem'>
                    <img src={cItem.cat_icon} alt="" />
                    <div>{cItem.cat_name}</div>
                  </div>
                )) : ''
              }
            </div>
          </div>
        )) : ''
      }
      
    </div>
  )
}
