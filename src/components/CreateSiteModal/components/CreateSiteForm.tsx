import { ENDPOINTS, fetcher, serverFetcher } from '@api/useAxiosSWR';
import Loader from '@components/common/Loader';
import { rootStore } from '@store/index';
import { cn } from '@utils/index';
import { AxiosError, AxiosResponse } from 'axios';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ConfigSiteResponse } from 'types/auth.request';

type Props = {
  toggleConfigSite: () => void;
};

async function createSite(siteName: string, sitePassword: string) {
  const response: AxiosResponse = await serverFetcher.get(
    `?siteName=${siteName}&sitePassword=${sitePassword}`
  );
  console.log('response', response);
  if (response.status === 200) {
    return true;
  }
}

const CreateSiteForm = ({ toggleConfigSite }: Props) => {
  const tk = rootStore(({ data }) => data.tk);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      siteName: '',
      sitePassword: '',
    },
    mode: 'onChange',
  });
  const [logging, setLogging] = useState(false);

  const onSubmit = async (data: Record<string, string>) => {
    console.log('data', data);
    setLogging(true);
    try {
      const response: ConfigSiteResponse = await fetcher.post(
        ENDPOINTS.configSite,
        {
          ...data,
        },
        {
          headers: {
            Authorization: `Bearer ${tk}`,
          },
        }
      );
      console.log('response', response);
      console.log('response.status', response.status);
      if (response.status === 200) {
        console.log(response);
        await createSite(data.siteName, data.sitePassword);

        const erpTarget = `http://${response.siteDomain}`
        enqueueSnackbar(`${response.siteDomain} is on live !!`, {
          variant: 'success',
        });
        setTimeout(() => {
          location.replace(erpTarget)
        }, 500);
      }
    } catch (error) {
      enqueueSnackbar(
        ((error as AxiosError)?.response?.data as { message: string })
          ?.message ||
          (error as Error).message ||
          'Internal error. Please try again later',
        {
          variant: 'error',
        }
      );
    }
  };

  return (
    <div
      className={cn(
        'w-full mx-4 lg:mx-0 mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 md:max-w-[450px]'
      )}
    >
      <div className='p-4 sm:p-7'>
        <h1 className='block text-2xl font-bold text-gray-800 dark:text-white text-center'>
          Create your VERTEX site
        </h1>
        <div className='mt-5'>
          <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid gap-y-4'>
              <div>
                <label
                  htmlFor='siteName'
                  className='block text-sm mb-2 dark:text-white'
                >
                  Site Name <span className='text-red-400'>*</span>
                </label>
                <div className='relative'>
                  <input
                    type='text'
                    id='siteName'
                    // name="email"
                    className='py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm 
                    focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 
                    disabled:pointer-events-none dark:bg-slate-900 
                    dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
                    // required
                    placeholder='Enter your site name'
                    {...register('siteName', {
                      required: 'Site name is required',
                    })}
                  />
                </div>
              </div>

              <div>
                <div className='flex justify-between items-center'>
                  <label
                    htmlFor='sitePassword'
                    className='block text-sm mb-2 dark:text-white'
                  >
                    Password <span className='text-red-400'>*</span>
                  </label>
                </div>
                <div className='relative'>
                  <input
                    type='password'
                    id='sitePassword'
                    // name="password"
                    className='py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm 
                    focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 
                    disabled:pointer-events-none dark:bg-slate-900 
                    dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
                    // required
                    placeholder='Enter your site password'
                    aria-describedby='password-error'
                    {...register('sitePassword', {
                      required: 'Password is required',
                    })}
                  />
                </div>
              </div>

              <button
                type='submit'
                disabled={logging}
                className='w-full mt-4 py-3 px-4 inline-flex justify-center items-center 
                gap-x-2 text-sm font-semibold rounded-lg border border-transparent 
                bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-50 
                disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 
                dark:focus:ring-gray-600'
              >
                {logging ? <Loader /> : 'Create Site'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateSiteForm;
