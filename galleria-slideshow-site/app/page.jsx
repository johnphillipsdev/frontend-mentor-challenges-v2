'use client';

import React, { useEffect, useState } from 'react';
import ImageCard from '@/components/ImageCard';

export default function Home() {
  // Setting data states to handle rendering.
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  // Fetch data from api src using provided data.
  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  // Loop over data and create card logic.
  const imageCards = data?.map((artworkData, index) => {
    const {
      images: { thumbnail, gallery },
    } = artworkData;

    return <ImageCard key={index} thumbnail={thumbnail} />;
  });

  return (
    <main className='py-[24px]'>
      <div className='container'>
        <div className='grid gap-[24px]'>{imageCards}</div>
      </div>
    </main>
  );
}
