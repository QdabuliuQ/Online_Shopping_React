import React from 'react'
import "./DetailTable.less"

export default function DetailTable(props) {
  const { attrList } = props
  return (
    <div id='DetailTable'>
      {
        attrList.length ? (
          <div>
            <div className='title'>商品参数</div>
            <div className='attrTable'>
              {
                attrList.map(item => (
                  <div className='itemTr attrItem' key={item.attr_id}>
                    <div className='attrName'>{item.attr_name}</div>
                    <div className='attrValue'>{item.attr_value}</div>
                  </div>
                ))
              }
            </div>
          </div>
        ) : ''
      }


    </div>
  )
}
