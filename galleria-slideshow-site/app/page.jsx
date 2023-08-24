'use client';

// Components
import ImageCard from '@/components/ImageCard';
import Loader from '@/components/LoadingScreen/Loader';

// Libraries
import useSWR from 'swr';

export default function Home() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, isLoading } = useSWR('/api/data', fetcher);

  // Loop over data and create card logic.
  const imageCards = data?.map((artworkData, index) => {
    const {
      name: title,
      artist: { name },
      images: { thumbnail },
    } = artworkData;

    return <ImageCard key={index} thumbnail={thumbnail} artist={name} title={title} />;
  });

  return (
    <main className='py-6 md:py-10'>
      <div className='container'>{isLoading ? <p>Loading...</p> : <div className='masonry-with-columns'>{imageCards}</div>}</div>
    </main>
  );
}
