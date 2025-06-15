import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";

const ManageProducts = () => {
  const { products } = useSelector((state) => state.productReducer);

  const renderproducts = products.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  return products?.length > 0 ? (
    <div className="bg-red-300 flex items-center flex-wrap justify-center gap-3 md:justify-start">
      {renderproducts}
    </div>
  ) : (
    <h1>No products available</h1>
  );
};

export default ManageProducts;
