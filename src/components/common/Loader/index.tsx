const Loader = () => {
  return (
    <div
      className="animate-spin inline-block w-6 h-6 border-[3px] border-gray-800 dark:border-white 
      border-t-transparent dark:border-t-transparent rounded-full dark:text-white text-gray-800"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
