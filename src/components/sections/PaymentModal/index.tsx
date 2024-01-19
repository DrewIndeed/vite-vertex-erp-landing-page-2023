import { ENDPOINTS, fetcher } from '@api/useAxiosSWR';
import Loader from '@components/common/Loader';
import { rootStore } from '@store/index';
import { cn } from '@utils/index';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { RegisterPremiumResponse } from 'types/auth.request';

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
    console.log(error)
    return false;
  }
}

const PaymentModal = () => {
  // store
  const isPayment = rootStore(({ data }) => data.isPayment);
  // const confirmPayment = rootStore(({ confirmPayment }) => confirmPayment);
  const tk = rootStore(({ data }) => data.tk);
  const togglePayment = rootStore(({ togglePayment }) => togglePayment);
  const toggleConfigSite = rootStore(
    ({ toggleConfigSite }) => toggleConfigSite
  );

  const [isPaying, setIsPaying] = useState(false)

  const handlePay = async () => {
    setIsPaying(true)
    await registerPremium(tk);
    setTimeout(() => {
      togglePayment()
      enqueueSnackbar('Successful Payment!', {
        variant: 'success',
      });
      setIsPaying(false)
    }, 2000);
    setTimeout(() => {
      toggleConfigSite()
    }, 1000);
  }


  if (!isPayment) return null;

  const Header = ({ isSpecial = false }: { isSpecial?: boolean; }) => {
    return <div className={cn('w-full', isSpecial && 'block lg:hidden')}>
      <div className='flex items-center'>
        <p className='ml-[4rem] lg:ml-0 text-[14px] font-medium tracking-[2%]'>Vertex ERP 2024</p>
        <div className='flex items-center justify-center ml-[10px] text-[12px] bg-yellow-200 text-amber-700 rounded-[5px] font-bold px-2 py-[0.5px]'>PREMIUM</div>
      </div>
      <p className='w-full text-center lg:w-max lg:text-start mt-[2rem] font-semibold text-gray-500'>Vertext ERP Full</p>
      <p className='w-full text-center lg:w-max lg:text-start text-[40px] font-medium tracking-[2%]'>$1.00</p>
      <p className='w-full text-center lg:w-max lg:text-start font-medium tracking-[0.6px] text-gray-600/90 text-[14px] mb-[1rem] lg:mb-[2rem]'>Unlock full potential of ERP forever</p>
      <div className='mx-auto w-[250px] h-[250px] lg:mx-0 lg:w-[300px] lg:h-[300px] overflow-hidden mb-[1rem] lg:mb-[2rem]'>
        <img className='w-full h-full object-cover' src="/diamond.png" alt="Triangle diamond" />
      </div>
      {!isSpecial && <div className="flex items-center gap-3 text-gray-400/80 text-[14px] font-light">
        Powered by
        <svg className="scale-[1.4] fill-gray-400/60" focusable="false" width={33} height={14} role="img" aria-labelledby="stripe-title">
          <title id="stripe-title">Stripe</title>
          <g fillRule="evenodd">
            <path d="M32.956 7.925c0-2.313-1.12-4.138-3.261-4.138-2.15 0-3.451 1.825-3.451 4.12 0 2.719 1.535 4.092 3.74 4.092 1.075 0 1.888-.244 2.502-.587V9.605c-.614.307-1.319.497-2.213.497-.876 0-1.653-.307-1.753-1.373h4.418c0-.118.018-.588.018-.804zm-4.463-.859c0-1.02.624-1.445 1.193-1.445.55 0 1.138.424 1.138 1.445h-2.33zM22.756 3.787c-.885 0-1.454.415-1.77.704l-.118-.56H18.88v10.535l2.259-.48.009-2.556c.325.235.804.57 1.6.57 1.616 0 3.089-1.302 3.089-4.166-.01-2.62-1.5-4.047-3.08-4.047zm-.542 6.225c-.533 0-.85-.19-1.066-.425l-.009-3.352c.235-.262.56-.443 1.075-.443.822 0 1.391.922 1.391 2.105 0 1.211-.56 2.115-1.39 2.115zM18.04 2.766V.932l-2.268.479v1.843zM15.772 3.94h2.268v7.905h-2.268zM13.342 4.609l-.144-.669h-1.952v7.906h2.259V6.488c.533-.696 1.436-.57 1.716-.47V3.94c-.289-.108-1.346-.307-1.879.669zM8.825 1.98l-2.205.47-.009 7.236c0 1.337 1.003 2.322 2.34 2.322.741 0 1.283-.135 1.581-.298V9.876c-.289.117-1.716.533-1.716-.804V5.865h1.716V3.94H8.816l.009-1.96zM2.718 6.235c0-.352.289-.488.767-.488.687 0 1.554.208 2.241.578V4.202a5.958 5.958 0 0 0-2.24-.415c-1.835 0-3.054.957-3.054 2.557 0 2.493 3.433 2.096 3.433 3.17 0 .416-.361.552-.867.552-.75 0-1.708-.307-2.467-.723v2.15c.84.362 1.69.515 2.467.515 1.879 0 3.17-.93 3.17-2.548-.008-2.692-3.45-2.213-3.45-3.225z" />
          </g>
        </svg>
      </div>}
    </div>
  }

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen z-[999] overscroll-none
      bg-clip-padding backdrop-filter backdrop-blur-md bg-white
      flex items-center justify-center animate-fadeIn"
    >
      <div className='w-full max-w-[375px] lg:max-w-[1000px] h-full flex items-center justify-center'>
        <div className='select-none hidden lg:flex flex-1 px-[3rem] pr-0 py-[5rem] h-full flex-col'>
          <Header />
        </div>
        <div className='flex-1 h-full overflow-auto flex flex-col gap-[1.5rem] left-shadow px-[2rem] py-[3rem] lg:px-[3rem] lg:py-[5rem]'>
          <Header isSpecial />
          <div>
            <label
              htmlFor="email"
              className="block text-sm mb-2 pl-1 text-gray-600"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm 
                    focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 
                    disabled:pointer-events-none shadow-md"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="cardInfo"
              className="block text-sm mb-2 pl-1 text-gray-600"
            >
              Card Information
            </label>
            <div className="relative">
              <input
                type="cardInfo"
                id="cardInfo"
                name="cardInfo"
                className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm 
                    focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 
                    disabled:pointer-events-none shadow-md mb-[1rem]"
                placeholder="1234 1234 1234 1234"
              />
              <div className='flex items-center gap-[1rem]'>
                <input
                  type="cardInfo"
                  id="cardInfo"
                  name="cardInfo"
                  className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm 
                    focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 
                    disabled:pointer-events-none shadow-md"
                  placeholder="MM / YY"
                />
                <input
                  type="cardInfo"
                  id="cardInfo"
                  name="cardInfo"
                  className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm 
                    focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 
                    disabled:pointer-events-none shadow-md"
                  placeholder="CVC"
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="cardName"
              className="block text-sm mb-2 pl-1 text-gray-600"
            >
              Cardholder Name
            </label>
            <div className="relative">
              <input
                type="cardName"
                id="cardName"
                name="cardName"
                className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm 
                    focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 
                    disabled:pointer-events-none shadow-md uppercase placeholder:normal-case"
                placeholder="Fullname on card"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="cardName"
              className="block text-sm mb-2 pl-1 text-gray-600"
            >
              Region
            </label>
            <div className="relative">
              <input
                disabled
                type="cardName"
                id="cardName"
                name="cardName"
                className="py-3 px-4 block w-full disabled:bg-gray-300 border border-gray-200 rounded-lg text-sm 
                    focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 
                    disabled:pointer-events-none shadow-md cursor-not-allowed"
                // placeholder="Fullname on card"
                value="Vietnam"
              />
            </div>
          </div>

          <div className='flex flex-col gap-[1rem] items-center'>
            <button
              onClick={handlePay}
              type="button"
              className="w-full mt-4 py-3 px-4 inline-flex justify-center items-center 
                gap-x-2 text-sm font-semibold rounded-lg border border-transparent 
                bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-50 
                disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 
                dark:focus:ring-gray-600"
            >
              {isPaying ? <Loader /> : "Pay Now"}
            </button>
            <button
              disabled={isPaying}
              onClick={() => togglePayment()}
              type="button"
              className="w-full py-3 px-4 inline-flex justify-center items-center 
                gap-x-2 text-sm font-semibold rounded-lg border border-transparent 
                bg-gray-400 text-white hover:bg-gray-500 disabled:opacity-50 
                disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 
                dark:focus:ring-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default PaymentModal