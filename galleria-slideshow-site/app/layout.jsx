import Image from 'next/image';
import './globals.scss';

export const metadata = {
  title: 'Frontend Mentor | Galleria Slideshow Site',
  description: '...',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='relative'>
        <header className='sticky top-0 z-50 bg-white'>
          <div className='flex justify-between py-6 container border-b border-light-gray'>
            <figure className='relative w-[113px] md:w-[170px]'>
              <Image src='/assets/shared/logo.svg' width={113} height={32} className='w-full h-full' alt='Gallery Logo' priority />
            </figure>
            <button className='link-1'>Start Slideshow</button>
          </div>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
