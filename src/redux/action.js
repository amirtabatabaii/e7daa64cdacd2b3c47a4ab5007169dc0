import { HOTEL_LIST, HOTELS_DETAIL, SELECTED_HOTEL } from "./types";

// get Hotel Lists
export const getHotelLists = (listOfHotels) => (dispatch) => {
  dispatch({
    type: HOTEL_LIST,
    payload: { listOfHotels },
  });
};

// get Hotels Details
export const getHotelsDetails = (list) => (dispatch) => {
  dispatch({
    type: HOTELS_DETAIL,
    payload: { list },
  });
};

// set Selected Hotel Detail
export const setSelectedHotel = (obj) => (dispatch) => {
  dispatch({
    type: SELECTED_HOTEL,
    payload: { obj },
  });
};
