import React, {useState} from 'react'
import "./DetailInfo.less"

const uncollect = require('assets/images/uncollect.png')
const collect = require('assets/images/collect.png')
export default function DetailInfo(props) {
  const {price, title} = props
  const [isCollect, setCollect] = useState(false)

  const toCollectGoods = () => {
    setCollect(!isCollect)
  }

  return (
    <div id='DetailInfo'>
      <div className='leftInfo'>
        <div className='infoPrice'>
          ￥{price}
        </div>
        <div className='infoTitle'>
          {title}
        </div>
      </div>
      <div className='rightInfo'>
        <img onClick={toCollectGoods} src={isCollect ? collect : uncollect} alt="" />
      </div>
    </div>
  )
}
