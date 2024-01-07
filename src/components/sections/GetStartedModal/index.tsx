import { rootStore } from "@store/index";
import { useCallback, useState } from "react";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";

const GetStartedModal = () => {
  // store
  const isStarting = rootStore(({ data }) => data.isStarting);
  const toggleStarted = rootStore(({ toggleStarted }) => toggleStarted);

  // states
  const [isSignUp, setSignUp] = useState(false);

  // methods
  const toggleSignUp = useCallback(() => setSignUp(!isSignUp), [isSignUp]);

  if (!isStarting) return null;
  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen z-[999] overscroll-none
    bg-clip-padding backdrop-filter backdrop-blur-md bg-white/60 dark:bg-[#020303]/60 
    flex items-center justify-center"
    >
      <div
        onClick={() => {
          setSignUp(false);
          toggleStarted();
        }}
        className="rounded-full flex items-center justify-center 
        hover:border hover:border-[#020303] h-[40px] w-[40px]
        dark:text-white dark:hover:border-white
        absolute top-[2rem] right-[2rem] text-2xl cursor-pointer"
      >
        ✕
      </div>
      {isSignUp ? (
        <SignUpForm toggleSignUp={toggleSignUp} />
      ) : (
        <SignInForm toggleSignUp={toggleSignUp} />
      )}
    </div>
  );
};

export default GetStartedModal;
