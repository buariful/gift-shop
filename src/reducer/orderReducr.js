import { SELECT_GIFT, SELECT_WRAPPER } from "../constants/orderConstants";

const initialState = {
  selectedGifts: [],
  selectedWrapper: {},
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GIFT:
      return {
        ...state,
        selectedGifts: action.payload,
      };
    case SELECT_WRAPPER:
      return {
        ...state,
        selectedWrapper: action.payload,
      };

    default:
      return state;
  }
};

export default orderReducer;
