import { rootStore } from "@store/index";
import { useState } from "react";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";

const GetStartedModal = () => {
  // store
  const isStarting = rootStore(({ data }) => data.isStarting);
  const isSignUp = rootStore(({ data }) => data.isSignUp);
  const toggleStarted = rootStore(({ toggleStarted }) => toggleStarted);
  const toggleSignUp = rootStore(({ toggleSignUp }) => toggleSignUp);

  // states
  const [loginSuccess, setLoginSuccess] = useState(false);

  if (!isStarting) return null;
  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen z-[999] overscroll-none
    bg-clip-padding backdrop-filter backdrop-blur-md bg-white/60 dark:bg-[#020303]/60 
    flex items-center justify-center animate-fadeIn"
    >
      {!loginSuccess && <div
        onClick={() => {
          if (isSignUp) toggleSignUp()
          toggleStarted();
        }}
        className="rounded-full flex items-center justify-center 
        border border-transparent hover:border-[#020303] h-[40px] w-[40px]
        dark:text-white dark:hover:border-white transition-all duration-200
        absolute top-[0.5rem] right-[0.5rem] md:top-[2rem] 
        md:right-[2rem] text-2xl cursor-pointer"
      >
        ✕
      </div>}
      {isSignUp ? (
        <SignUpForm
          toggleSignUp={toggleSignUp}
        />
      ) : (
        <SignInForm
          toggleSignUp={toggleSignUp}
          loginSuccess={loginSuccess}
          setLoginSuccess={setLoginSuccess}
        />
      )}
    </div>
  );
};

export default GetStartedModal;
