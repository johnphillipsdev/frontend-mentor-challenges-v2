import Spinner from './Spinner';

export default function Loader() {
  return (
    <div className='absolute z-50 w-full h-screen bg-white flex flex-col justify-center place-items-center p-10'>
      <Spinner />
      <p className='link-1 cursor-auto mt-auto'>Loading Gallery...</p>
    </div>
  );
}
