import { HOTEL_LIST, HOTELS_DETAIL, SELECTED_HOTEL } from "./types";

import initialState from "./store";

export default function (state = initialState, action) {
  switch (action.type) {
    case HOTEL_LIST:
      return {
        ...state,
        listOfHotels: action.payload.listOfHotels,
      };

    case HOTELS_DETAIL:
      return {
        ...state,
        detailsOfHotels: action.payload.list,
      };

    case SELECTED_HOTEL:
      return {
        ...state,
        selectedHotel: action.payload.obj,
      };

    // case SELECTED_HOTEL:
    //   const htl = state.find((b) => action.htl === b.id);
    //   return state;

    default:
      return {
        ...state,
      };
  }
}
