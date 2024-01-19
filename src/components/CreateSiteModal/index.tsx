import { rootStore } from '@store/index';
import CreateSiteForm from './components/CreateSiteForm';

const CreateSiteModal = () => {
  const isConfigSite = rootStore(({ data }) => data.isConfigSite);
  if (!isConfigSite) return null;
  return (
    <div
      className='fixed top-0 bottom-0 left-0 right-0 w-screen h-screen z-[999] overscroll-none
    bg-clip-padding backdrop-filter backdrop-blur-md bg-white/60 dark:bg-[#020303]/60 
    flex items-center justify-center animate-fadeIn'
    >
      <CreateSiteForm />
    </div>
  );
};

export default CreateSiteModal;
