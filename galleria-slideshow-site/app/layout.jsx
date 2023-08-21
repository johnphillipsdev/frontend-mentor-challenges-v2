import Image from 'next/image';
import './globals.css';

export const metadata = {
  title: 'Frontend Mentor | Galleria Slideshow Site',
  description: '...',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <header>
          <div className='flex justify-between py-6 container'>
            <figure>
              <Image src='/assets/shared/logo.svg' width={113} height={32} alt='Gallery Logo' />
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
