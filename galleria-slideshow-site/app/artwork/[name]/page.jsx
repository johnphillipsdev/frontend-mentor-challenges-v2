'use client';

// Libraries
import useSWR from 'swr';

export default function ArtworkSingle({ params: { name } }) {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, isLoading } = useSWR('/api/data/1', fetcher);

  return (
    <main>
      <div className='container'>{isLoading ? <p>Loading...</p> : <p>{data.name}</p>}</div>
    </main>
  );
}
