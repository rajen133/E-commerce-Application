import { Input } from "antd";
import PageTitle from "../../components/page-title/page-title.component";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

interface IUserProps {
  username: string;
  password: string;
}
// HomePage Component
const HomePage = (props: Readonly<{ pageTitle: string }>) => {
  const {
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IUserProps>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const handleChange = (data: IUserProps) => {
    console.log(data);
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <PageTitle pageTitle={props.pageTitle} />

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-200 p-5 shadow-2xl rounded-md">
          <form onSubmit={handleSubmit(handleChange)}>
            <div className="flex mb-5">
              <label className="w-1/3" htmlFor="username">
                Username:
              </label>
              <div className="flex flex-col w-full">
                <Input
                  type="username"
                  id="username"
                  placeholder="Enter your username"
                  status={errors.username ? "error" : ""}
                  onChange={(e: any) => setValue("username", e.target.value)}
                />
                <div className="flex flex-col">
                  <span className="text-red-800 text-xs italic">
                    {errors?.username?.message}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex mb-5">
              <label className="w-1/3" htmlFor="password">
                Password:
              </label>
              <div className="flex flex-col w-full">
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  status={errors.password ? "error" : ""}
                  onChange={(e: any) => setValue("password", e.target.value)}
                />
                <span className="text-red-800 text-xs italic">
                  {errors?.password?.message}
                </span>
              </div>
            </div>
            <div className="flex flex-row-reverse mb-5">
              <a
                href="/forget-password"
                className="text-teal-800 underline font-light text-sm italic hover:text-teal-950"
              >
                Forget password?
              </a>
            </div>
            <div className="flex gap-5">
              <button
                type="reset"
                className="border border-red-800 px-3 py-0.5 rounded-md bg-red-800 text-white hover:bg-red-950 hover:cursor-pointer"
              >
                <MdOutlineCancel className="inline-block mr-2" />
                Cancel
              </button>
              <button
                type="submit"
                className="border border-teal-800 px-3 py-0.5 rounded-md bg-teal-800 text-white hover:bg-teal-950 hover:cursor-pointer"
              >
                <IoMdSend className="inline-block mr-2" />
                Submit
              </button>
            </div>
          </form>
          <div className="text-left mt-5">
            Not registered yet?{" "}
            <a
              href="/register"
              className="text-teal-800 underline font-light italic text-sm hover:text-teal-950"
            >
              Sign Up Now!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
