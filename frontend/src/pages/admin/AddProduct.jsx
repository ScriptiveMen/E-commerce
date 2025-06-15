import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

import { useDispatch } from "react-redux";
import { asyncCreateProduct } from "../../store/actions/ProductsAction";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const AddProductHandler = async (product) => {
    product.id = nanoid();
    dispatch(asyncCreateProduct(product));
    reset();
  };

  return (
    <div className="w-full min-h-[70vh]  md:min-h-[80vh] flex items-center md:justify-center">
      <div className="flex w-full h-full  flex-col  gap-5 justify-between md:w-[40%] md:gap-9">
        <h1 className="text-4xl font-bold md:text-5xl tracking-tight">
          Add a new product
        </h1>

        <form
          className="flex items-end flex-col gap-4 md:gap-7"
          onSubmit={handleSubmit(AddProductHandler)}
        >
          <div className="flex flex-col w-full">
            <label htmlFor="title">Product title</label>
            <input
              className="bg-[#ebe8e1] p-2 outline-0"
              {...register("title")}
              type="text"
              placeholder="Enter product title here"
              id="title"
              name="title"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="price">Product price</label>
            <input
              className="bg-[#ebe8e1] p-2 outline-0"
              {...register("price")}
              type="text"
              placeholder="Enter product price here"
              id="price"
              name="price"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="description">Product description</label>
            <textarea
              className="bg-[#ebe8e1] p-2 outline-0 resize-none"
              {...register("description")}
              type="text"
              placeholder="Enter product description here"
              id="description"
              name="description"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="category">Product category</label>
            <select
              className="bg-[#ebe8e1] p-2 outline-0"
              {...register("category")}
              type="text"
              id="category"
              name="category"
            >
              <option value="men's clothing">Men's Clothing</option>
              <option value="woman's clothing">Woman's Clothing</option>
              <option value="kid's clothing">Kid's Clothing</option>
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="image">Product image</label>
            <input
              className="bg-[#ebe8e1] p-2 outline-0"
              {...register("image")}
              type="url"
              placeholder="Enter product's image url"
              id="image"
              name="image"
            />
          </div>

          <button
            className="px-5 py-2 rounded-lg bg-black text-white"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
