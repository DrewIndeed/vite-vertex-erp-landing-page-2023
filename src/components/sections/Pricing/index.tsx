import { ENDPOINTS, fetcher } from '@api/useAxiosSWR';
import { rootStore } from '@store/index';
import { enqueueSnackbar } from 'notistack';
import {
  RegisterPremiumResponse,
  RegisterTrialResponse,
} from 'types/auth.request';

const TickMark = () => (
  <svg
    className='flex-shrink-0 mt-0.5 h-4 w-4 text-violet-600/60 dark:text-violet-500/60'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polyline points='20 6 9 17 4 12' />
  </svg>
);

type Props = {
  isInModal?: boolean;
  isExpiredPlan?: boolean;
};

async function registerTrial(tk: string) {
  try {
    const response: RegisterTrialResponse = await fetcher.post(
      ENDPOINTS.registerTrial,
      {},
      {
        headers: {
          Authorization: `Bearer ${tk}`,
        },
      }
    );
    if (response.status === 200) {
      console.log(response);
      enqueueSnackbar('Trial registered successfully', {
        variant: 'success',
      });
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function registerPremium(tk: string) {
  try {
    const response: RegisterPremiumResponse = await fetcher.post(
      ENDPOINTS.registerPremium,
      {},
      {
        headers: {
          Authorization: `Bearer ${tk}`,
        },
      }
    );
    if (response.status === 200) {
      console.log(response);
      enqueueSnackbar('Premium registered successfully', {
        variant: 'success',
      });

      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

const Pricing = ({ isInModal, isExpiredPlan }: Props) => {
  const tk = rootStore(({ data }) => data.tk);
  const isSignUp = rootStore(({ data }) => data.isSignUp);
  const toggleStarted = rootStore(({ toggleStarted }) => toggleStarted);
  const toggleSignUp = rootStore(({ toggleSignUp }) => toggleSignUp);
  const toggleConfigSite = rootStore(
    ({ toggleConfigSite }) => toggleConfigSite
  );

  const mainTitle = isInModal ? 'Choose you plan' : 'Pricing';
  const cta = isInModal ? 'I Want This' : 'Sign Up';

  const commonOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    toggleStarted();
    if (!isSignUp) toggleSignUp();
  };
  const handleFreeClicked = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isInModal) commonOnClick(e);

    e.preventDefault();
    await registerTrial(tk);
    toggleStarted();
    toggleConfigSite();
  };
  const handlePremiumClicked = async (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (!isInModal) commonOnClick(e);

    e.preventDefault();
    await registerPremium(tk);
    toggleStarted();
    toggleConfigSite();
  };
  return (
    <div
      className='max-w-[42rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'
      id='pricing'
    >
      <div className='max-w-2xl mx-auto text-center mb-10 lg:mb-14'>
        <h2 className='text-2xl font-bold md:text-4xl md:leading-tight dark:text-white'>
          {mainTitle}
        </h2>
        <p className='mt-1 text-gray-600 dark:text-gray-400'>
          Whatever your status, our offers evolve according to your needs.
        </p>
      </div>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:items-center'>
        {!isExpiredPlan && (
          <div className='flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700'>
            <h4 className='font-medium text-lg text-gray-800 dark:text-gray-200'>
              Free
            </h4>
            <span className='mt-7 font-bold text-5xl text-gray-800 dark:text-yellow-400'>
              Free
            </span>
            <p className='mt-2 text-sm text-gray-500'>Forever free</p>

            <ul className='mt-7 space-y-2.5 text-sm'>
              <li className='flex space-x-2'>
                <TickMark />
                <span className='text-gray-800 dark:text-gray-400'>1 user</span>
              </li>

              <li className='flex space-x-2'>
                <TickMark />
                <span className='text-gray-800 dark:text-gray-400'>
                  Plan features
                </span>
              </li>

              <li className='flex space-x-2'>
                <TickMark />
                <span className='text-gray-800 dark:text-gray-400'>
                  Product support
                </span>
              </li>
            </ul>

            <a
              className='mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg 
            border border-transparent bg-violet-100/60 text-violet-800/60 hover:bg-violet-200/60 
            disabled:opacity-50 disabled:pointer-events-none 
            dark:hover:bg-violet-800/60 dark:text-[#203030] dark:hover:text-white
            dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
              href=''
              onClick={handleFreeClicked}
            >
              {cta}
            </a>
          </div>
        )}

        <div className='flex flex-col border-2 border-violet-600/60 text-center shadow-xl rounded-xl p-8 dark:border-violet-700/60'>
          <p className='mb-3'>
            <span className='inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-violet-100/60 text-violet-800/60 dark:bg-violet-600/60 dark:text-white'>
              Most popular
            </span>
          </p>
          <h4 className='font-medium text-lg text-gray-800 dark:text-gray-200'>
            Premium
          </h4>
          <span className='mt-5 font-bold text-5xl text-gray-800 dark:text-yellow-400'>
            <span className='font-bold text-2xl -my-2'>$</span>
            1.00
          </span>
          <p className='mt-2 text-sm text-gray-500'>
            All the basics for starting a new business
          </p>

          <ul className='mt-7 space-y-2.5 text-sm'>
            <li className='flex space-x-2'>
              <svg
                className='flex-shrink-0 mt-0.5 h-4 w-4 text-violet-600/60 dark:text-violet-500/60'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <polyline points='20 6 9 17 4 12' />
              </svg>
              <span className='text-gray-800 dark:text-gray-400'>
                Unlimited users
              </span>
            </li>

            <li className='flex space-x-2'>
              <svg
                className='flex-shrink-0 mt-0.5 h-4 w-4 text-violet-600/60 dark:text-violet-500/60'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <polyline points='20 6 9 17 4 12' />
              </svg>
              <span className='text-gray-800 dark:text-gray-400'>
                All exclusive features
              </span>
            </li>

            <li className='flex space-x-2'>
              <svg
                className='flex-shrink-0 mt-0.5 h-4 w-4 text-violet-600/60 dark:text-violet-500/60'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <polyline points='20 6 9 17 4 12' />
              </svg>
              <span className='text-gray-800 dark:text-gray-400'>
                Product support
              </span>
            </li>
          </ul>

          <a
            className='mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold 
            rounded-lg border border-transparent bg-violet-600/60 text-white hover:bg-violet-700/60 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            href=''
            onClick={handlePremiumClicked}
          >
            {cta}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
