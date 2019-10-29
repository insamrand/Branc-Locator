import actions from "../actions";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.Types.LOCATION_DEVICE_FOUND: {
      if (payload !== currentLocation.undefined) {
        return { ...state, currentLocation: payload };
      } else {
        return { ...state };
      }
    }

    case actions.Types.SIGN_IN_SUCCESS: {
      return { ...state, token: payload };
    }

    case actions.Types.GET_BRANCH_LIST_SUCCESS: {
      return { ...state, branches: payload };
    }

    default:
      return state;
  }
};
