import { SELECT_GIFT, SELECT_WRAPPER } from "../constants/orderConstants";

export const giftAction = (item) => async (dispatch) => {
  dispatch({
    type: SELECT_GIFT,
    payload: item,
  });
};
export const wrapperAction = (item) => async (dispatch) => {
  dispatch({
    type: SELECT_WRAPPER,
    payload: item,
  });
};
