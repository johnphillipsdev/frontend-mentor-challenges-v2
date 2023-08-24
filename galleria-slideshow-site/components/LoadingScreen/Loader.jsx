import Image from 'next/image';
import Spinner from './Spinner';

export default function Loader() {
  return (
    <div className='absolute z-50 w-full h-screen bg-white flex flex-col justify-center place-items-center p-10'>
      <Spinner />
      <p className='link-1 cursor-auto mt-auto'>Loading Gallery...</p>
      <Image className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0' src='/assets/girl-with-pearl-earring/thumbnail.jpg' alt='Gallary Picture Title' priority width={310} height={400} />
    </div>
  );
}
