import { EMAIL_PATTERN } from "@constants/index";
import { ENDPOINTS, fetcher } from "@api/useAxiosSWR";
import { enqueueSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { LoginResponse } from "types/auth.request";
import { AxiosError } from "axios";
import { rootStore } from "@store/index";
import React, { useState } from "react";
import Loader from "@components/common/Loader";

type Props = {
  toggleSignUp: () => void;
  loginSuccess: boolean
  setLoginSuccess: React.Dispatch<React.SetStateAction<boolean>>
};

const SignInForm = ({ toggleSignUp, loginSuccess, setLoginSuccess }: Props) => {
  // hooks
  const {
    register,
    handleSubmit,
    // watch,
    // control,
    formState: { errors: formErrors },
    // clearErrors,
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const clientLogin = rootStore(({ handleClientLogin }) => handleClientLogin);

  // states
  const [logging, setLogging] = useState(false);
  const [hasDomain, setHasDomain] = useState(false);

  // methods
  const onSubmit = async (data: Record<string, string>) => {
    setLogging(true);
    try {
      const response: LoginResponse = await fetcher.post(ENDPOINTS.login, {
        ...data,
      });
      if (response.message === "Login successful" && response.token) {
        const _resetting = () => {
          // reset form
          reset();
          setLogging(false);
        }

        // handle login toen and state at client
        clientLogin(response.token);
        setLoginSuccess(true)

        // is user has not chosen plan
        if (response.domain === null) {
          setTimeout(() => {
            _resetting()
            // msg
            enqueueSnackbar(`Welcome to VertexERP, ${data.email}`, {
              variant: "success",
            });
          }, 200);

          // TODO: becAUSE Stripe has been removed, after msg we can show plans to choose 
          // OR navigate to plans section so that users can pick
          return;
        }

        // if user has chosen plan
        setHasDomain(true)
        const erpTarget = `http://${response.domain!}`
        setTimeout(() => {
          _resetting()
          // msg
          enqueueSnackbar(`Welcome back, ${data.email}`, {
            variant: "success",
          });
        }, 200);

        // redirect to ERP platform
        setTimeout(() => {
          location.replace(erpTarget)
        }, 500);
      }
    } catch (error) {
      setLogging(false);
      enqueueSnackbar(
        ((error as AxiosError)?.response?.data as { message: string })
          ?.message || (error as Error).message || "Internal error. Please try again later",
        {
          variant: "error",
        }
      );
    }
  };

  return (
    <div
      className="w-full mx-4 lg:mx-0 md:max-w-[450px] mt-7 bg-white border border-gray-200 rounded-xl shadow-sm 
    dark:bg-gray-800 dark:border-gray-700"
    >
      {!loginSuccess && <div className="p-4 sm:p-7">
        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white text-center">
          Sign in
        </h1>

        <div className="mt-5">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Email <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    // name="email"
                    className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm 
                    focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 
                    disabled:pointer-events-none dark:bg-slate-900 
                    dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    // required
                    placeholder="Enter your lovely email"
                    aria-describedby="email-error"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: EMAIL_PATTERN,
                        message: "Email has invalid format",
                      },
                    })}
                    aria-invalid={formErrors.email ? "true" : "false"}
                  />
                </div>
                {formErrors.email && (
                  <p className="text-xs text-red-600 mt-2" id="email-error">
                    {formErrors.email?.message}
                  </p>
                )}
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="password"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Password <span className="text-red-400">*</span>
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    // name="password"
                    className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm 
                    focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 
                    disabled:pointer-events-none dark:bg-slate-900 
                    dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    // required
                    placeholder="Enter your password"
                    aria-describedby="password-error"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must have at least 6 characters",
                      },
                    })}
                    aria-invalid={formErrors.password ? "true" : "false"}
                  />
                </div>
                {formErrors.password && (
                  <p className="text-xs text-red-600 mt-2" id="password-error">
                    {formErrors.password?.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={logging}
                className="w-full mt-4 py-3 px-4 inline-flex justify-center items-center 
                gap-x-2 text-sm font-semibold rounded-lg border border-transparent 
                bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-50 
                disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 
                dark:focus:ring-gray-600"
              >
                {logging ? <Loader /> : "Sign in"}
              </button>
            </div>
          </form>
        </div>

        <div
          className="py-3 flex items-center text-xs text-gray-400 uppercase mt-3
        before:flex-[1_1_0%] before:border-t before:border 
        before:me-6 after:flex-[1_1_0%] after:border-t after:border 
        border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 
        dark:after:border-gray-600"
        >
          Or
        </div>

        <div className="text-center">
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Don't have an account yet?
            <a
              className="text-blue-600 decoration-2 hover:underline font-medium 
              dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href=""
              onClick={(e) => {
                e.preventDefault();
                toggleSignUp();
              }}
            >
              {" "}
              Sign up here
            </a>
          </p>
        </div>
      </div>}
      {loginSuccess && <div className="w-full h-[300px] relative flex flex-col items-center justify-center gap-[1rem]">
        <Loader />
        <span className="text-gray-800 dark:text-white">
          {hasDomain ? "Redirecting to Frappe ..." : "Redirecting to Subscriptions ..."}
        </span>
      </div>}
    </div>
  );
};

export default SignInForm;
