export default function Spinner() {
  return (
    <span id='loading-spinner' class='dot-animation mt-auto relative w-10 h-10 z-10'>
      <span class='chase-dot'></span>
      <span class='chase-dot'></span>
      <span class='chase-dot'></span>
      <span class='chase-dot'></span>
      <span class='chase-dot'></span>
      <span class='chase-dot'></span>
    </span>
  );
}