export default function Spinner() {
  return (
    <span id='loading-spinner' className='dot-animation mt-auto relative w-10 h-10 z-10'>
      <span className='chase-dot'></span>
      <span className='chase-dot'></span>
      <span className='chase-dot'></span>
      <span className='chase-dot'></span>
      <span className='chase-dot'></span>
      <span className='chase-dot'></span>
    </span>
  );
}
