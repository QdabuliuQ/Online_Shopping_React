import React, { useEffect, useState } from 'react'
import { getFloorData } from "network/index";
import "./HomeFloor.less"

export default function HomeFloor(props) {
  let [floorData, setFloor] = useState([])

  useEffect(() => {
    getFloorData().then(res => {
      setFloor(res.message)
    })
  }, [])

  let {title} = props
  return (
    <div>
      {
        floorData.map(item => {
          return (
            <div key={item.floor_title.image_src} className='HomeFloor'>
              <div className='floorTitle'>
                <img src={item.floor_title.image_src} alt="" />
              </div>
              <div className='floorContainer'>
                {
                  item.product_list.map((img,index) => {
                    return (
                      <div className={'content content'+(index + 1)} key={img.name}>
                        <img src={img.image_src} alt="" />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
