import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Mainroutes from "./routes/Mainroutes";
import { asyncCurrentUser } from "./store/actions/UsersAction";
import { useDispatch } from "react-redux";
import { asyncLoadProducts } from "./store/actions/ProductsAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asyncLoadProducts());
  }, []);

  return (
    <div className="relative px-3 *:bg-[#fdfbf5] w-full md:py-4 md:px-6 ">
      <NavBar />
      <Mainroutes />
    </div>
  );
};

export default App;
