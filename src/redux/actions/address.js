import { 
  ADD_ADDRESS ,
  EDIT_ADDRESS,
  EDIT_ALL_ADDRESS
} from "../constants/index";

// 添加一个地址
export function addAddress(data) {
  return {
    type: ADD_ADDRESS,
    data
  }
}

// 修改一个地址
export function editAddress(data, index) {
  return {
    type: EDIT_ADDRESS,
    data,
    index
  }
}

// 修改所有地址
export function editAllAddress(data) {
  return {
    type: EDIT_ALL_ADDRESS,
    data
  }
}