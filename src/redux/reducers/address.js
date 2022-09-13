import { 
  ADD_ADDRESS ,
  EDIT_ADDRESS,
  EDIT_ALL_ADDRESS
} from "../constants/index";

const defaultState = [{
  name: '牛牛牛',
  location: '广东省 汕头市',
  address: '潮阳区牛牛牛市',
  phone: '13726508433',
}]
export default function address(state = defaultState, action) {
  const {
    type,
    data
  } = action
  switch (type) {
    // 添加地址
    case ADD_ADDRESS:
      state.unshift(data)
      return state;
    // 修改单个地址
    case EDIT_ADDRESS:
      const { index } = action
      console.log(index, data, '-------');
      state[index] = data
      return state;
    // 修改所有地址
    case EDIT_ALL_ADDRESS:
      return data;
    default:
      return state;
  }
}