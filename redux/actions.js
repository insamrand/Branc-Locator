import locationService from "../services/location.service";
// Android Emulator's default localhost ip: 10.0.2.2
let token = "";

const Types = {
  LOCATION_DEVICE_FOUND: "LOCATION_DEVICE_FOUND",
  SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
  GET_BRANCH_LIST_SUCCESS: "GET_BRANCH_LIST_SUCCESS",
  SIGN_OUT_SUCCESS: "SIGN_OUT_SUCCESS"
};

const getCurrentLocation = async dispatch => {
  const { location, errorMessage } = await locationService();

  if (location) {
    dispatch({
      type: Types.LOCATION_DEVICE_FOUND,
      payload: location
    });
  } else if (errorMessage) {
    console.error(errorMessage);
  }
};

const startSignIn = async (dispatch, navigation, username, password) => {
  const signInInfo = {
    username: username,
    password: password
  };

  const response = await fetch("http://10.0.2.2:3000/api/auth/signin", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(signInInfo)
  });

  console.log("Response:", response);

  if (response && response.status === 200) {
    const json = await response.json();
    console.log("Token:", json.token);
    dispatch({
      type: Types.SIGN_IN_SUCCESS,
      payload: json.token
    });

    token = json.token;

    console.log("going to home page");
    navigation.navigate("Home");
  } else {
    console.error(response.status, response.message);
  }
};

const getBranchLocation = async dispatch => {
  const response = await fetch("http://10.0.2.2/api/branches", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });

  console.log("Response:", response);

  if (response && response.status === 200) {
    const json = await response.json();
    console.log("Branches:", json.branches);
    dispatch({
      type: Types.GET_BRANCH_LIST_SUCCESS,
      payload: json.branches
    });
  } else {
    console.error(response.status, response.message);
  }
};

export default {
  Types,
  getCurrentLocation,
  startSignIn,
  getBranchLocation
};
