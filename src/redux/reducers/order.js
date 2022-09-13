import {
  ADD_ORDER,
  EDIT_ORDER_STATUS,
  EDIT_ORDER_STATUS_BYID
} from "../constants";

const defaultState = []
export default function order(state = defaultState, action) {
  const {
    type,
    data
  } = action

  switch (type) {
    case ADD_ORDER:
      return [data, ...state]
    case EDIT_ORDER_STATUS:
      const {index} = action
      state[index] = data
      return state
    case EDIT_ORDER_STATUS_BYID:
      const {id} = action
      for (let item of state) {
        if (item.id == id) {
          item = data
        }
      }
      return state
    default:
      return state;
  }
}