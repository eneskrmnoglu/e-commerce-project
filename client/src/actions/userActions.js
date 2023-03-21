import axios from "axios";

//Register Action
export const registerUserAction = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:4000/api/users/register",
      user
    );
    console.log("Response", response);

    dispatch({ type: "USER_REGISTER_SUCCESS", payload: response.data });
    window.location.href = "/login";
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};

//Login Action
export const loginUserAction = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:4000/api/users/login",
      user
    );
    console.log("Response", response);

    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    //window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
  }
};

export const logoutUserAction = () => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login";
};
