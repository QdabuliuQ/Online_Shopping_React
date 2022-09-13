import {
  INIT_CART,
  ADD_GOODS_CART,
  EDIT_GOODS_CART,
  EDIT_ALL_GOODS_CART,
  DELETE_GOODS_CART
} from "../constants";

const defaultState = []
export default function cart(state = defaultState, action) {
  const {
    type,
    data
  } = action
  switch (type) {
    case INIT_CART:
      return [];
    case ADD_GOODS_CART:
      return [data, ...state];
    case EDIT_GOODS_CART:
      const {
        index
      } = action
      state[index] = data
      return state;
    case EDIT_ALL_GOODS_CART:
      return data;
    case DELETE_GOODS_CART:
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < state.length; j++) {
          if (data[i] == state[j].goods_id) {
            state.splice(j, 1)
            break;
          }
        }
      }
      return state;
    default:
      return state;
  }
}