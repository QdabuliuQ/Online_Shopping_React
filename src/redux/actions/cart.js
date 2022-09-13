import {
  INIT_CART,
  ADD_GOODS_CART,
  EDIT_GOODS_CART,
  EDIT_ALL_GOODS_CART,
  DELETE_GOODS_CART
} from "../constants";

// 创建动作对象
export function initCart(data) {
  return {
    type: INIT_CART,
    data
  }
}

// 添加商品信息
export function addGoodsCart(data) {
  return {
    type: ADD_GOODS_CART,
    data
  }
}

// 修改商品信息
export function editGoodsCart(data, index) {
  return {
    type: EDIT_GOODS_CART,
    data,
    index
  }
}

// 修改商品信息
export function editAllGoodsCart(data) {
  return {
    type: EDIT_ALL_GOODS_CART,
    data,
  }
}

// 删除商品信息
export function deleteGoodsCart(data) {
  return {
    type: DELETE_GOODS_CART,
    data,
  }
}