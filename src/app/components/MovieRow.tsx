import React from 'react'
import Image from 'next/image'

type MovieRowProps = {
  sectionTitle: string,
}

type MovieCardProps = {
  index: number,
}

const MovieCard = ({index}: MovieCardProps) => (
  <div className='group relative h-28 min-w-[200px] cursor-pointer rounded bg-gradient-to-t from-transparent to-black transition-transform duration-200 ease-out hover:opacity-100 md:h-36 md:min-w-[260px] md:hover:scale-110'>
    <Image
      src={`/item_${index}.png`}
      fill={true}
      alt='MAD'
      className='rounded'
    />
  </div>
);

export const MovieRow = ({sectionTitle}: MovieRowProps) => (
  <div className='flex-col space-y-4'>
    <div className='flex'>
      <h2 className="-ml-2 inline-flex items-center text-2xl font-bold">{sectionTitle}</h2>
    </div>
    <div className='-ml-8 flex space-x-4 p-6 overflow-x-scroll scrollbar-hide'>
        {[1, 2, 3, 4, 5].map((index) => (
          <MovieCard key={index}  index={index}/>
        ))}
    </div>
  </div>
)