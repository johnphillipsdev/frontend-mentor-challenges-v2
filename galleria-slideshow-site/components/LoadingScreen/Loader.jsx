'use client';

// Next.js
import Image from 'next/image';
import { useEffect, useRef } from 'react';

// Components
import Spinner from './Spinner';

// Libraries
import { gsap } from 'gsap';
import useSWR from 'swr';

export default function Loader() {
  // Fetch data for loading state.
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { isLoading } = useSWR('/api/data', fetcher);

  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to('#loading-text', { opacity: 0 })
      .to('#loading-spinner', { opacity: 0 }, '<')
      .to('#loading-image', { scale: 0, ease: 'power2.inOut' })
      .to(containerRef.current, { y: '-100%', ease: 'power2.inOut' })
      .to('html', { overflow: 'auto' })
      .pause();

    if (isLoading) {
      tl.play();
    }
  }, [isLoading]);

  return (
    <div
      ref={containerRef}
      className='absolute z-50 w-full h-screen bg-white flex flex-col justify-center place-items-center p-10'
    >
      <Spinner />
      <p id='loading-text' className='link-1 cursor-auto mt-auto'>
        Loading Gallery...
      </p>
      <Image
        id='loading-image'
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0'
        src='/assets/girl-with-pearl-earring/thumbnail.jpg'
        alt='Gallary Picture Title'
        priority
        width={310}
        height={400}
      />
    </div>
  );
}
