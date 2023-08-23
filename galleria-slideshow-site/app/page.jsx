'use client';

// Components
import ImageCard from '@/components/ImageCard';

// Libraries
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Home() {
  const { data, error, isLoading } = useSWR('/api/data', fetcher);

  // Loop over data and create card logic.
  const imageCards = data?.map((artworkData, index) => {
    console.log(artworkData);
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
