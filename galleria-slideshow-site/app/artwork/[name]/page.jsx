'use client';

// Libraries
import useSWR from 'swr';

export default function ArtworkSingle() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, isLoading } = useSWR('/api/data/', fetcher);

  console.log(data);

  return (
    <main>
      <div className='container'>Artwork</div>
      <p></p>
    </main>
  );
}
