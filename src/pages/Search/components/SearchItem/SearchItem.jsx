import React from 'react'
import "./SearchItem.less"
import { useNavigate } from "react-router-dom";
export default function SearchItem(props) {
  const router = useNavigate()

  return (
    <div onClick={() => router('/detail', {
      state: {
        id: props.goods_id
      }
    })} className='SearchItem'>
      {props.goods_name}
    </div>
  )
}
