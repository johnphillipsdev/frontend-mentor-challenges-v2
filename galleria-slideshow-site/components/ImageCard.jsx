import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function ImageCard({ thumbnail, title, artist }) {
  return (
    <Link className='masonry-item' href='/'>
      <figure className='relative h-fit'>
        <Image
          src={thumbnail}
          alt='Gallary Picture Title'
          width={500}
          height={500}
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
        />
        <div className='p-[32px] pr-[49px] absolute bottom-0 left-0 text-white z-20'>
          <h2 className='heading-2'>{title}</h2>
          <h3 className='subheading-2 mt-[7px]'>{artist}</h3>
        </div>
        <span className='cover-gradient z-10'></span>
      </figure>
    </Link>
  );
}

export default ImageCard;
