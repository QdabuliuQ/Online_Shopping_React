import React, { useEffect, useState } from 'react'
import { NavBar, Swiper, ErrorBlock  } from 'antd-mobile'
import { useNavigate, useLocation } from "react-router-dom";
import { getGoodsDetail } from "network/index";
import DetailInfo from "./components/DetailInfo/DetailInfo";
import DetailTable from "./components/DetailTable/DetailTable";
import DetailDesc from "./components/DetailDesc/DetailDesc";
import DetailTabbar from "./components/DetailTabbar/DetailTabbar";
import "./Detail.less"

export default function Detail() {
  const router = useNavigate()
  const { id } = useLocation().state
  const [info, setInfo] = useState(null)

  useEffect(() => {
    getGoodsDetail({
      goods_id: id
    }).then(res => {
      setInfo(res.message)
    })
  }, [])


  return (
    <div id='Detail'>
      <NavBar onBack={() => router(-1)}>商品详情</NavBar>
      {
        info ? (
          <div className='infoContainer'>
            {
              info.pics.length ? (
                <Swiper autoplay loop style={{
                  '--track-padding': ' 0 0 16px'
                }}>
                  {
                    info.pics.length ? info.pics.map(item =>
                    (
                      <Swiper.Item key={item.pics_id}>
                        <div className='swiperItemContainer'>
                          <img src={item.pics_mid_url} alt="" />
                        </div>
                      </Swiper.Item>
                    )) : ''
                  }
                </Swiper>
              ) : <ErrorBlock
                    title='暂无商品图片'
                    description=''
                    image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
                    style={{
                      '--image-height': '150px',
                      marginBottom: '20px'
                    }}>
                  </ErrorBlock>
            }
            <DetailInfo price={info.goods_price} title={info.goods_name} />
            <DetailTable attrList={info.attrs} />
            <DetailDesc desc={info.goods_introduce} />
            <DetailTabbar info={info} />
          </div>
        ) : ''
      }
    </div>
  )
}
