import React, { useEffect, useState, useRef } from 'react'
import { useLocation } from "react-router-dom";
import { Toast, ErrorBlock } from 'antd-mobile'
import "./GoodsList.less"
import SearchNav from "components/SearchNav/SearchNav";
import { getGoodsList } from "network/index";
import GoodsItem from "./components/GoodsItem/GoodsItem";

export default function GoodsList() {
  const { cat_id } = useLocation().state
  const [pageNum, setPageNum] = useState(1)
  const [list, setList] = useState([])
  const [total, setTotal] = useState(-1)
  const handler = useRef()

  const getData = () => {
    let toast = Toast.show({
      icon: 'loading',
      content: '加载中…',
      duration: 0
    })
    getGoodsList({
      cid: cat_id,
      pagenum: pageNum,
      pagesize: 20
    }).then(res => {
      console.log(res);
      setPageNum(pageNum + 1)
      setTotal(res.message.total)
      setList([...list, ...res.message.goods])
      toast.close()
    })
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div id='GoodsList'>
      <SearchNav />
      {
        total == 0 && !list.length ? (
          <ErrorBlock
            image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
            style={{
              '--image-height': '150px',
            }}
            title='暂无商品信息'
            description=''
          >
          </ErrorBlock>
        ) : (
          <div className='goodsListContainer'>
            {
              list.length ? list.map(item => (
                <GoodsItem id={item.goods_id} count={item.goods_number} price={item.goods_price} title={item.goods_name} image={item.goods_big_logo} key={item.goods_id} />
              )) : (
                ''
              )
            }
          </div>
        )
      }
    </div>
  )
}
