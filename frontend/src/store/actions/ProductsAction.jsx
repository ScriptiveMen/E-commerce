import { toast } from "react-toastify";
import axios from "../../api/apiconfig";
import { loadproducts } from "../reducers/ProductSlice";

export const asyncLoadProducts = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadproducts(data));
  } catch (error) {
    console.log(error);
  }
};

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
  try {
    await axios.post("/products", product);
    dispatch(asyncLoadProducts());
    toast.success("Product created");
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const asyncUpdateProduct =
  (id, product) => async (dispatch, getState) => {
    try {
      await axios.patch("/products/" + id, product);
      dispatch(asyncLoadProducts());
      toast.success("Product updated");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

export const asyncDeleteProduct = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/products/" + id);
    dispatch(asyncLoadProducts());
    toast.success("Product deleted");
  } catch (error) {
    toast.error("Something went wrong");
  }
};
