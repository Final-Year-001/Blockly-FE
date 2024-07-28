import { useState } from "react";
import { Input } from "@material-tailwind/react";
import { useMutation } from "react-query";
import { useNavigate, Link } from "react-router-dom";
import { signupWithUsernameAndPassword, User } from "../../api/auth";
import { useRecoilState } from "recoil";
import { tokenAtom } from "../../state/auth";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import ProductLogo from "../../assets/Logo";
import img from "../../assets/loginImg/loginimg.gif";
import bgImg from "../../assets/loginImg/ttbg.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import StatusNoti from "../fronted/Status";

function SignUpPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false); // State for password visibility
  const [loading, setLoading] = useState(false);

  const [_, setTokens] = useRecoilState(tokenAtom);

  const loginDisabled = !(username.length > 0 && password.length > 0);

  const navigate = useNavigate();

  const signUpMutation = useMutation({
    mutationFn: signupWithUsernameAndPassword,
    onSuccess: () => {
      setTimeout(() => navigate("/login"), 3000)
    },
  });

  const signup = () => {
    setLoading(true);
    const signupParameters: User  = { username, password, firstName, lastName, email };
    console.log(signUpMutation)
    signUpMutation.mutate(signupParameters);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="flex justify-center items-center w-full h-full bg-repeat"
      style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "30%" }}
    >
      {/* Conditional rendering based on screen size */}
      <div className="hidden md:block bg-white h-full w-full relative">
        <div className="min-h-screen flex items-center justify-center">
          <div className="absolute top-0 left-0 m-6">
            <Link to="/home">
              <ProductLogo />
            </Link>
          </div>
          <div>
            <div>
              <img src={img} alt="Your Image" className="w-96 h-96" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 left-0 right-0 flex justify-center">
          <div className="m-6">
            <TypeAnimation
              className="Typewriter"
              sequence={[
                "Lets Learn",
                2000,
                "Lets Imagine",
                2000,
                "Lets Build",
                2000,
                "Lets Code",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-inherit flex justify-center ">
        <div className="flex border-4 border-black flex-col text-gray-700 bg-white w-96 rounded-xl bg-clip-border">
          <div className="grid text-white h-28 place-items-center rounded-xl bg-inherit">
            <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-black">
              Sign Up
            </h3>
          </div>
          <div className="flex flex-col gap-4 p-6">
            <div className="relative h-11 w-full min-w-[200px]">
              <Input
                type="text"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                containerProps={{ className: "min-w-0" }}
              />
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <Input
                type="text"
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                containerProps={{ className: "min-w-0" }}
              />
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <Input
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                containerProps={{ className: "min-w-0" }}
              />
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <Input
                type="text"
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                containerProps={{ className: "min-w-0" }}
              />
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <Input
                type={showPassword ? "text" : "password"}
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                containerProps={{ className: "min-w-0" }}
                icon={
                  showPassword ? (
                    <FaEyeSlash
                      className="cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <FaEye
                      className="cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                  )
                }
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
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  className="mt-px font-light text-gray-700 cursor-pointer select-none"
                  htmlFor="checkbox"
                >
                  I agree to the terms and conditions
                </label>
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <AwesomeButton
              className="block w-full"
              style={{
                "--button-primary-color": "#3399ff",
                "--button-primary-color-dark": "#096dd2",
                "--button-primary-color-light": "#ffffff",
                "--button-primary-color-hover": "#3399ff",
                "--button-primary-color-active": "#3399ff",
                "--button-default-border-radius": "8px",
              }}
              onMouseUp={signup}
              type="primary"
            >
              {loading ? "Loading..." : "Sign Up"}
            </AwesomeButton>

            <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
              Already have an account?
              <a
                href="/login"
                className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
      { signUpMutation.isSuccess ? <StatusNoti message={"SignUp success. You may now login."} mode="success" /> : null }
      { signUpMutation.isError ? <StatusNoti message={"SignUp failed. Are you already registered with this email or username?"} mode="pending"/> : null }
    </div>
  );
}

export default SignUpPage;
