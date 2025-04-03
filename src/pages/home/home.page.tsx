import PageTitle from "../../components/page-title/page-title.component";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  InputLabel,
  InputType,
  PasswordInputComponent,
  TextInputComponent,
} from "../../components/form/input.component";
import { Button } from "antd";
import { NavLink } from "react-router";
import { Suspense } from "react";
import authSvc from "../../services/auth.service";
import { toast } from "react-toastify";
import { setLocalStorage } from "../../utilities/helpers";

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
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IUserProps>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const submitForm = async (data: IUserProps) => {
    try {
      const response = await authSvc.post("/auth/login", data);
      setLocalStorage("accessToken", response.data.accessToken);
      setLocalStorage("refreshToken", response.data.refreshToken);

      console.log(response);
      toast.success("Welcome to Admin Panel");
    } catch (exception: any) {
      console.log(exception);
      toast.error(exception.data.message);
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <PageTitle pageTitle={props.pageTitle} />

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-200 p-5 shadow-2xl rounded-md">
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="flex mb-5">
              <InputLabel htmlFor="username">Username:</InputLabel>
              <div className="flex flex-col w-full">
                {/* <Suspense> used to optimize the performance */}
                <Suspense fallback={<>...Loading</>}>
                  <TextInputComponent
                    name="username"
                    type={InputType.TEXT}
                    errorMsg={errors?.username?.message}
                    control={control}
                  />
                </Suspense>
              </div>
            </div>
            <div className="flex mb-5">
              <InputLabel htmlFor="password">Password:</InputLabel>
              <div className="flex flex-col w-full">
                <Suspense>
                  <PasswordInputComponent
                    name="password"
                    errorMsg={errors?.password?.message}
                    control={control}
                  />
                </Suspense>
              </div>
            </div>
            <div className="flex flex-row-reverse mb-5">
              <NavLink
                to="/forget-password"
                className="text-teal-800 underline font-light text-sm italic hover:text-teal-950"
              >
                Forget password?
              </NavLink>
            </div>
            <div className="flex gap-5">
              <Button
                htmlType="reset"
                disabled={isSubmitting}
                variant="solid"
                className="bg-red-800! hover:bg-red-900! text-white! hover:border-red-950!"
              >
                {" "}
                <MdOutlineCancel className="inline-block mr-2" />
                Cancel
              </Button>
              <Button
                htmlType="submit"
                disabled={isSubmitting}
                variant="solid"
                className="bg-teal-800! hover:bg-teal-900! text-white! hover:border-teal-950!"
              >
                <IoMdSend className="inline-block mr-2" /> Submit
              </Button>
            </div>
          </form>
          <div className="text-left mt-5">
            Not registered yet?{" "}
            <NavLink
              to="/register"
              className="text-teal-800 underline font-light italic text-sm hover:text-teal-950"
            >
              Sign Up Now!
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
