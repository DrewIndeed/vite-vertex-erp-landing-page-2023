import { rootStore } from "@store/index";
import Icons from "./icons";
import "./style.css";

const Hero = () => {
  const toggleStarted = rootStore(({ toggleStarted }) => toggleStarted);
  return (
    <section className="wrapper">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-[20dvh] mb-10 sm:mb-20">
        {/* waitlist button */}
        <div className="flex justify-center">
          <a className="pro-release-wrapper" href="">
            PRO release - Join to waitlist
            <span
              className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full 
              bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400"
            >
              <Icons.WaitListChevronRight />
            </span>
          </a>
        </div>
        {/* main headline */}
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
            Rethink Your{" "}
            <span className="bg-clip-text with-base-gradient text-transparent">
              Business Management
            </span>
          </h1>
        </div>
        {/* sub headline */}
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400">
            Vertex ERP is a system that empowers your business through efficient
            marketing, seamless subscriber tracking, and robust management
            capabilities.
          </p>
        </div>
        {/* get started */}
        <div className="mt-8 gap-3 flex justify-center flex-col-reverse sm:flex-row">
          <a
            className="get-started-btn with-base-gradient"
            href=""
            onClick={(e) => {
              e.preventDefault();
              toggleStarted();
            }}
          >
            Get started
            <Icons.GetStartedChevronRight />
          </a>
          <button type="button" className="group yarn-add-wrapper">
            $ yarn add vertex-erp
            <span className="flex justify-center items-center bg-gray-200 rounded-md w-7 h-7 dark:bg-gray-700 dark:text-gray-400">
              <Icons.YarnAddCopy />
            </span>
          </button>
        </div>
        {/* package manager */}
        <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Package Manager:
          </span>
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            yarn
          </span>
          <Icons.PackageSlash />
          <a
            className="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
            href=""
          >
            Installation Guide
            <Icons.InstallationChevronRight />
          </a>
        </div>
        {/* rating and partners */}
        <div className="mt-6 sm:mt-12 lg:mt-16 flex gap-5 md:gap-12 justify-center flex-col sm:flex-row">
          {/* ratings */}
          <div className="flex gap-0 justify-between sm:gap-8 sm:justify-center scale-95 md:scale-100">
            <div className="pt-2">
              <div className="flex space-x-1">
                <Icons.FullStar />
                <Icons.FullStar />
                <Icons.FullStar />
                <Icons.FullStar />
                <Icons.HalfStar />
              </div>

              <p className="mt-3 text-sm text-gray-800 dark:text-gray-200">
                <span className="font-bold">4.6</span> /5 - from 12k reviews
              </p>

              <div className="mt-5">
                <Icons.Google />
              </div>
            </div>

            <div className="pt-2">
              <div className="flex space-x-1">
                <Icons.FullStar />
                <Icons.FullStar />
                <Icons.FullStar />
                <Icons.FullStar />
                <Icons.FullStar />
              </div>

              <p className="mt-3 text-sm text-gray-800 dark:text-gray-200">
                <span className="font-bold">4.8</span> /5 - from 5k reviews
              </p>

              <div className="mt-5">
                <Icons.Forbes />
              </div>
            </div>
          </div>
          {/* partners */}
          <div className="flex gap-8 scale-95 md:scale-100">
            <div className="pb-5">
              <div className="">
                <span className="text-xs font-medium text-gray-800 uppercase dark:text-gray-200">
                  Trusted by:
                </span>
                <div className="mt-4 flex gap-x-8">
                  <Icons.Airbnb />
                  <Icons.Fitbit />
                  <Icons.Vidados />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
