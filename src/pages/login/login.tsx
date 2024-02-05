import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { loginWithUsernameAndPassword } from "../../api/auth";
import { useRecoilState } from "recoil";
import { tokenAtom } from "../../state/auth";

function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [_, setTokens] = useRecoilState(tokenAtom);

  const loginDisabled = !(username.length > 0 && password.length > 0);

  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: loginWithUsernameAndPassword,
    onSuccess: (res) => {
      setTokens(res);
      navigate("/my/project");
    },
  });

  const login = () => {
    loginMutation.mutate({ username, password });
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20">
          <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
            Sign In
          </h3>
        </div>
        <div className="flex flex-col gap-4 p-6">
          <div className="relative h-11 w-full min-w-[200px]">
            <Input
              crossOrigin={undefined}
              type="text"
              label="Username"
              value={username}
              onChange={(email) => setUsername(email.target.value)}
              containerProps={{
                className: "min-w-0",
              }}
            />
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <Input
              crossOrigin={undefined}
              type="password"
              label="Password"
              value={password}
              onChange={(password) => setPassword(password.target.value)}
              containerProps={{
                className: "min-w-0",
              }}
            />
          </div>
          <div className="-ml-2.5">
            <div className="inline-flex items-center">
              <label
                htmlFor="checkbox"
                className="relative flex items-center p-3 rounded-full cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="checkbox"
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px font-light text-gray-700 cursor-pointer select-none"
                htmlFor="checkbox"
              >
                Remember Me
              </label>
            </div>
          </div>
        </div>
        <div className="p-6 pt-0">
          <button
            className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            disabled={loginDisabled}
            onClick={login}
          >
            Sign In
          </button>
          <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
            Don't have an account?
            <a
              href="#signup"
              className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
