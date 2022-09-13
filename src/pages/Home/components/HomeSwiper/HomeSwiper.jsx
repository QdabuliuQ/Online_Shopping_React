import React, { useState, useEffect } from 'react'
import { getBanner } from "network/index";
import { Swiper } from 'antd-mobile'
import "./HomeSwiper.less"

export default function HomeSwiper() {
  let [swiperList, setSwiper] = useState([])

  useEffect(() => {
    getBanner().then(res => {
      setSwiper(res.message)
    })
  }, [])

  return (
    <div id='HomeSwiper'>
      {
        swiperList.length ?
          <Swiper autoplay='true' loop='true' style={{
            '--track-padding': ' 0 0 16px'
          }}>
            {
              swiperList.map(item => {
                return (
                  <Swiper.Item key={item.goods_id}>
                    <div>
                      <img src={item.image_src} alt="" />
                    </div>
                  </Swiper.Item>
                )
              })
            }
          </Swiper> : ''
      }

    </div>
  )
}
