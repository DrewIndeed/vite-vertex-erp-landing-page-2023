import { FEATURES } from "./constant";

const Features = () => {
  return (
    <section className="my-5 md:my-12">
      {/* features title and subtitle */}
      <div className="max-w-2xl mx-auto text-center mb-8 lg:mb-10 px-4">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Right Service, Right Result
        </h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Our diversity never seizes to amaze
        </p>
      </div>
      {/* features show case boxes */}
      <div className="w-full flex justify-center">
        <div
          className="rounded-md md:rounded-xl mx-4 mb-5 flex-1 max-w-[85rem]
        bg-gradient-to-tl from-blue-600/50 to-violet-600/50 dark:from-blue-600/50 dark:to-violet-600/50 p-0 md:p-[2px]"
        >
          {/* features grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-8 md:gap-10 bg-white/90 dark:bg-[#03020395] backdrop-blur-sm p-5 md:p-10 rounded-md md:rounded-xl">
            {FEATURES.map((feat) => {
              return (
                <div key={feat.title}>
                  <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
                    {feat.icon}
                  </div>
                  <div className="mt-5">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {feat.title}
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* features grid */}
        </div>
      </div>
    </section>
  );
};

export default Features;
