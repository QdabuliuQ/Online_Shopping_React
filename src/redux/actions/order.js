import {
  ADD_ORDER,
  EDIT_ORDER_STATUS,
  EDIT_ORDER_STATUS_BYID,
} from "../constants";

// 添加一个订单
export function addOrder(data) {
  return {
    type: ADD_ORDER,
    data
  }
}
// 修改订单状态
export function editOrderStatus(data, index) {
  return {
    type: EDIT_ORDER_STATUS,
    data,
    index
  }
}
// 修改订单状态
export function editOrderStatusByid(data, id) {
  return {
    type: EDIT_ORDER_STATUS_BYID,
    data,
    id
  }
}