import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Mainroutes from "./routes/Mainroutes";
import { asyncCurrentUser } from "./store/actions/UsersAction";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadProducts } from "./store/actions/ProductsAction";
import Footer from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.users);
  const { products } = useSelector((state) => state.productReducer);

  useEffect(() => {
    !user && dispatch(asyncCurrentUser());
  }, [user]);

  useEffect(() => {
    products.length == 0 && dispatch(asyncLoadProducts());
  }, [products]);

  return (
    <div className="relative px-3 *:bg-[#fdfbf5] w-full md:py-4 md:px-6 ">
      <NavBar />
      <Mainroutes />
      <Footer />
    </div>
  );
};

export default App;
