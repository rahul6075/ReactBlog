import { loginStart, loginSuccess, loginFailure } from "./userSlice";
import axios from "../axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/users/register", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(loginFailure());
  }
};
