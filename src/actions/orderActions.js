import { SELECT_GIFT } from "../constants/orderConstants";

export const selectGiftAction = (item) => async (dispatch) => {
  dispatch({
    type: SELECT_GIFT,
    payload: item,
  });
};
