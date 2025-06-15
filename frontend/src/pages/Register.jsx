import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../store/actions/UsersAction";
import { toast } from "react-toastify";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    user.cart = [];
    user.wishlist = [];
    dispatch(asyncRegisterUser(user));
    toast.success("Login Now!");
    navigate("/login");
  };

  return (
    <div className="w-full  min-h-[70vh] md:min-h-[80vh] flex items-center md:justify-center">
      <div className="flex w-full h-full  flex-col  gap-5 justify-between md:w-[40%] md:gap-9">
        <h1 className="text-4xl font-bold md:text-5xl">Register</h1>

        <form
          className="flex items-end flex-col gap-4 md:gap-7"
          onSubmit={handleSubmit(RegisterHandler)}
        >
          <div className="flex flex-col w-full">
            <label htmlFor="name">Fullname</label>
            <input
              className="bg-[#ebe8e1] p-2 outline-0"
              {...register("name")}
              type="text"
              placeholder="Enter your fullname"
              id="name"
              name="name"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="phonenumber">Contact Number </label>
            <input
              className="bg-[#ebe8e1] p-2 outline-0"
              {...register("phonenumber")}
              type="number"
              placeholder="Enter your contact number"
              id="phonenumber"
              name="phonenumber"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="username">Create Username</label>
            <input
              className="bg-[#ebe8e1] p-2 outline-0"
              {...register("username")}
              type="text"
              placeholder="Enter your username"
              id="username"
              name="username"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="email">Email address</label>
            <input
              className="bg-[#ebe8e1] p-2 outline-0"
              {...register("email")}
              type="text"
              placeholder="Enter your email address"
              id="email"
              name="email"
            />
          </div>
          <div className="flex flex-col w-full ">
            <label htmlFor="password">Create Password</label>
            <input
              className="bg-[#ebe8e1] p-2 outline-0"
              placeholder="Enter your password here"
              {...register("password")}
              type="password"
              id="password"
            />
          </div>

          <button
            className="px-5 py-2 rounded-lg bg-black text-white"
            type="submit"
          >
            Continue
          </button>
        </form>

        <div>
          <p className="text-gray-500">
            Already have an account?{" "}
            <Link className="text-black" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
