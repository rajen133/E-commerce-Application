import { useForm } from "react-hook-form";
// import { Input } from "antd";
// import { FaPaperPlane } from "react-icons/fa";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  InputLabel,
  InputType,
  PasswordInputComponent,
  TextInputComponent,
} from "./form/input.component";
interface LoginProps {
  email: string;
  password: string;
}
const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const {
    // register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<LoginProps>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  // This function gives the data i.e email and password
  const submitForm = (data: LoginProps) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-full justify-center flex-1 flex-col px-6 py-12 lg:px-8 bg-white">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-300 shadow-2xl p-5 rounded-sm">
        <h1 className="text-2xl/9 text-center font-bold tracking-tight text-gray-900 mb-10">
          Welcome To <br />
          Login Page
        </h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="flex mb-5 justify-left">
            <InputLabel>Username:</InputLabel>
            <div className="flex flex-col w-full">
              <TextInputComponent
                name="email"
                type={InputType.EMAIL}
                errorMsg={errors.email?.message ?? null}
                control={control}
              />
            </div>
            {/* <input
              type="email"
              id="email"
              placeholder="Enter your username"
              className="border border-gray-300 rounded-sm w-2/3 px-1 py-1 focus:outline focus:ring-2 focus:ring-gray-400"
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
            />
            {errors.email && <span role="alert">Email is required</span>} */}
          </div>
          <div className="flex mb-5">
            <InputLabel>Password:</InputLabel>
            <div className="flex flex-col w-full">
              <PasswordInputComponent
                name="password"
                errorMsg={errors.password?.message ?? null}
                control={control}
              />
            </div>
            {/* <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="border border-gray-300 rounded-sm w-2/3 px-1 py-1 focus:outline focus:ring-2 focus:ring-gray-400"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 10,
              })}
            />
            {errors.password && <span role="alert">Password is required</span>} */}
          </div>
          <div className="flex flex-row-reverse mb-5">
            <a
              className="text-teal-800 font-light underline italic text-sm hover:text-purple-950"
              href="/forget-password"
            >
              Forget Password?
            </a>
          </div>
          <div className="flex gap-5">
            <button
              type="reset"
              className="border border-red-300 px-0.5 py-1 w-30 rounded-sm bg-red-900 text-white hover:cursor-pointer hover:bg-red-950"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="border border-teal-300 px-0.5 py-1 w-30 rounded-sm bg-teal-900 text-white hover:cursor-pointer hover:bg-teal-950"
            >
              {/* <FaPaperPlane /> */}
              Submit
            </button>
          </div>
        </form>
        <div className="text-left mt-5">
          Not registered yet?{" "}
          <a
            href="/registered"
            className="text-teal-800 font-light underline italic text-sm hover:text-purple-950"
          >
            SignUp now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
