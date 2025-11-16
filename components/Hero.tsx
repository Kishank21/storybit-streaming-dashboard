import Image from 'next/image'
import React from 'react'
import { Movie } from '../types'
import { posterUrl } from '../lib/tmdb'

export default function Hero({ movie }: { movie?: Movie }) {
  if (!movie) return null;
  const title = movie.title || movie.name;
  const backdrop = posterUrl(movie.backdrop_path || movie.poster_path, 'w780');

  return (
    <section className="relative h-72 md:h-96 rounded-lg overflow-hidden mb-6">
      <Image src={backdrop} alt={title || 'hero'} fill priority sizes="100vw" style={{objectFit: 'cover'}} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6">
        <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
        <p className="max-w-xl mt-2 text-sm md:text-base text-gray-200">{movie.overview?.slice(0,200)}{movie.overview && movie.overview.length > 200 ? '...' : ''}</p>
      </div>
    </section>
  )
}
