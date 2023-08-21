import Image from 'next/image';
import React from 'react';

function ImageCard({ thumbnail }) {
  return (
    <figure className='h-fit'>
      <Image
        src={thumbnail}
        alt='Gallary Picture Title'
        width={500}
        height={500}
        style={{
          height: 'fit-content',
          width: '100%',
        }}
      />
    </figure>
  );
}

export default ImageCard;
