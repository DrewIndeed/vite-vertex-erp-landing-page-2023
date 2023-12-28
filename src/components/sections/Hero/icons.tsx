const WaitListChevronRight = () => {
  return (
    <svg
      className="flex-shrink-0 w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
};

const GetStartedChevronRight = () => {
  return (
    <svg
      className="flex-shrink-0 w-4 h-4"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

const YarnAddCopy = () => {
  return (
    <svg
      className="flex-shrink-0 w-4 h-4 group-hover:rotate-6 transition"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
};

const PackageSlash = () => {
  return (
    <svg
      className="h-5 w-5 text-gray-300 dark:text-gray-600"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round" />
    </svg>
  );
};

const InstallationChevronRight = () => {
  return (
    <svg
      className="flex-shrink-0 w-4 h-4"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

const Icons = {
  WaitListChevronRight,
  GetStartedChevronRight,
  YarnAddCopy,
  PackageSlash,
  InstallationChevronRight,
};

export default Icons;
