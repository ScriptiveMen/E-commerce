import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ItemsCard from "../../components/ItemsCard";

const Cart = () => {
  const user = useSelector((state) => state.userReducer.users);
  const { products } = useSelector((state) => state.productReducer);

  const renderCartItems = user.cart.map((c) => {
    return <ItemsCard key={c.product.id} product={c} />;
  });

  return (
    <div className="h-full w-full flex flex-col items-center gap-4">
      {renderCartItems}
    </div>
  );
};

export default Cart;
