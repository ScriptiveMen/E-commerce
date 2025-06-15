import { toast } from "react-toastify";
import axios from "../../api/apiconfig";
import { loaduser } from "../reducers/UserSlice";

export const asyncCurrentUser = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch(loaduser(user));
  } catch (error) {
    dispatch(loaduser(null));
  }
};

export const asyncLogoutUser = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    dispatch(loaduser(null));
  } catch (error) {
    toast.error("Something went wrong!");
  }
};

export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    const loggedInUser = res.data[0];
    if (loggedInUser) {
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      dispatch(loaduser(loggedInUser));
      toast.success("Login successful!");
    } else {
      toast.error("Invalid credentials!");
    }
  } catch (error) {
    toast.error("Something went wrong!");
  }
};

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
  } catch (error) {
    toast.error("Something went wrong!");
  }
};

export const asyncUpdateUser = (id, user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.patch("/users/" + id, user);
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(asyncCurrentUser());
  } catch (error) {
    toast.error("Something went wrong!");
  }
};

export const asyncDeleteUser = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/users/" + id);
    dispatch(asyncLogoutUser());
  } catch (error) {
    toast.error("Something went wrong!");
  }
};
