import React, {useRef, useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import "./SearchNav.less"

export default function HomeSearch() {
  const router = useNavigate()
  const [height, setHeight] = useState()
  const searchNavRef = useRef()
  useEffect(() => {
    setHeight(searchNavRef.current.clientHeight)
  })
  return (
    <div className='SearchNavContainer'>
      <div ref={searchNavRef} onClick={() => router('/search')} id='SearchNav'>
        <div className='searchContainer'>
          搜索
        </div>
      </div>
      <div className='searchNavBox' style={{height: height+'px'}}>
      </div>
    </div>
    
  )
}
