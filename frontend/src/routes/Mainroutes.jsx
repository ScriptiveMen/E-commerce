import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/user/Home";
import Products from "../pages/user/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PageNotFound from "../pages/PageNotFound";
import ProductDetails from "../pages/ProductDetail";
import UnAuthorised from "../pages/UnAuthorised";
import About from "../pages/user/About";
import Profile from "../pages/user/Profile";
import Cart from "../pages/user/Cart";
import AddProduct from "../pages/admin/AddProduct";
import ManageProducts from "../pages/admin/ManageProducts";
import Users from "../pages/admin/Users";
import { useSelector } from "react-redux";
import UpdateProduct from "../pages/admin/UpdateProduct";
import AuthAdmin from "./AuthAdmin";
import AuthUser from "./AuthUser";

const Mainroutes = () => {
  const user = useSelector((state) => state.userReducer.users);

  return (
    <Routes>
      <Route
        path="/"
        element={
          user?.isAdmin ? <Navigate to="/admin/add-products" /> : <Home />
        }
      ></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/" />}
      ></Route>
      <Route
        path="/register"
        element={!user ? <Register /> : <Navigate to="/" />}
      ></Route>
      <Route path="/about" element={<About />}></Route>
      <Route
        path="/cart"
        element={!user ? <Navigate to="/login" /> : <Cart />}
      ></Route>

      {/* protected user routes */}
      <Route
        path="/profile"
        element={
          <AuthUser>
            <Profile />
          </AuthUser>
        }
      ></Route>

      {/* protected admin routes */}
      <Route
        path="/admin/add-products"
        element={
          <AuthAdmin>
            <AddProduct />
          </AuthAdmin>
        }
      ></Route>
      <Route
        path="/admin/manage-products"
        element={
          <AuthAdmin>
            <ManageProducts />
          </AuthAdmin>
        }
      ></Route>
      <Route
        path="/admin/list-users"
        element={
          <AuthAdmin>
            <Users />
          </AuthAdmin>
        }
      ></Route>
      <Route
        path="/admin/update-product/:id"
        element={
          <AuthAdmin>
            <UpdateProduct />
          </AuthAdmin>
        }
      ></Route>

      {/* global routes */}
      <Route path="*" element={<PageNotFound />}></Route>
      <Route path="/unauthorized" element={<UnAuthorised />}></Route>
      <Route
        path="/products/view-details/:id"
        element={<ProductDetails />}
      ></Route>
    </Routes>
  );
};

export default Mainroutes;
