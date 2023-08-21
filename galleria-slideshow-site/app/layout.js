import './globals.css';

export const metadata = {
  title: 'Frontned Mentor | Galleria Slideshow Site',
  description: '...',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
