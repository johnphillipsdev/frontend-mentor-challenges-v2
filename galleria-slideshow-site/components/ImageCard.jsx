// Next.js
import Image from 'next/image';
import Link from 'next/link';

function ImageCard({ thumbnail, title, artist, index }) {
  const handle = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link href={`/artwork/${handle}?slide=${index}`} className='masonry-item group'>
      <figure className='relative h-fit md:h-full'>
        <Image
          src={thumbnail}
          alt={title}
          width={500}
          height={500}
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
        />
        <span className='cover-gradient bg-transparent opacity-50 transition-colors lg:group-hover:bg-white z-20'></span>
        <div className='p-8 pr-[49px] absolute bottom-0 left-0 text-white z-30'>
          <h2 className='heading-2'>{title}</h2>
          <h3 className='subheading-2 mt-[7px]'>{artist}</h3>
        </div>
        <span className='cover-gradient h-[170px] top-auto bottom-0 z-10'></span>
      </figure>
    </Link>
  );
}

export default ImageCard;
