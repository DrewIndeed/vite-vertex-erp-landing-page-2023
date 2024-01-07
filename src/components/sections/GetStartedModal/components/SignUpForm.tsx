type Props = {
  toggleSignUp: () => void;
};

const SignUpForm = ({ toggleSignUp }: Props) => {
  return (
    <div
      className="mt-7 w-full mx-4 lg:mx-0 md:max-w-[450px] bg-white border border-gray-200 rounded-xl shadow-sm 
      dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="p-4 sm:p-7">
        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white text-center">
          Create account
        </h1>

        <div className="mt-5">
          <form className="w-full">
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
                    name="email"
                    className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm 
                      focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 
                      disabled:pointer-events-none dark:bg-slate-900 
                      dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    required
                    placeholder="Enter your lovely email"
                    aria-describedby="email-error"
                  />
                </div>
                {/* <p
                  className="hidden text-xs text-red-600 mt-2"
                  id="username-error"
                >
                  Please include a valid email address so we can get back to you
                </p> */}
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
                    name="password"
                    className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm 
                      focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 
                      disabled:pointer-events-none dark:bg-slate-900 
                      dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    required
                    placeholder="Enter new password"
                    aria-describedby="password-error"
                  />
                </div>
                {/* <p
                  className="hidden text-xs text-red-600 mt-2"
                  id="password-error"
                >
                  8+ characters required
                </p> */}
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Confirm Password <span className="text-red-400">*</span>
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="confirmPassword"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm 
                      focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 
                      disabled:pointer-events-none dark:bg-slate-900 
                      dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    required
                    placeholder="Re-enter your new password"
                    aria-describedby="confirmPassword-error"
                  />
                </div>
                {/* <p
                  className="hidden text-xs text-red-600 mt-2"
                  id="password-error"
                >
                  8+ characters required
                </p> */}
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3 px-4 inline-flex justify-center items-center 
                  gap-x-2 text-sm font-semibold rounded-lg border border-transparent 
                  bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-50 
                  disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 
                  dark:focus:ring-gray-600"
              >
                Create account
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
            Already have an account?
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
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
