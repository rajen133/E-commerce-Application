import { Input } from "antd";
import PageTitle from "../../components/page-title/page-title.component";
import { useState } from "react";

interface IUserProps {
  username: string;
  password: string;
}

const HomePage = (props: Readonly<{ pageTitle: string }>) => {
  const [credentials, setCredentials] = useState<IUserProps>({
    username: "",
    password: "",
  });
  console.log(credentials);
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <PageTitle pageTitle={props.pageTitle} />

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-200 p-5 shadow-2xl rounded-md">
          <form>
            <div className="flex mb-5">
              <label className="w-1/3" htmlFor="username">
                Username:
              </label>
              <Input
                type="username"
                id="username"
                required
                className="w-2/3!"
                placeholder="Enter your username"
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
              />
            </div>
            <div className="flex mb-5">
              <label className="w-1/3" htmlFor="password">
                Password:
              </label>
              <Input
                type="password"
                id="password"
                required
                className="w-2/3!"
                placeholder="Enter your password"
                onChange={(e: any) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
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
                Cancel
              </button>
              <button
                type="submit"
                className="border border-teal-800 px-3 py-0.5 rounded-md bg-teal-800 text-white hover:bg-teal-950 hover:cursor-pointer"
              >
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
