import React from 'react'
import { fetchMovieById, posterUrl } from '../../../lib/tmdb'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface Props {
  params: { id: string }
}

export default async function MoviePage({ params }: Props) {
  const { id } = params
  let movie
  try {
    movie = await fetchMovieById(id)
  } catch (e) {
    notFound()
  }
  if (!movie) notFound()

  return (
    <div className="pt-24">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1 relative h-96 rounded overflow-hidden bg-gray-800">
          <Image 
  src={posterUrl(movie.poster_path) || '/placeholder.png'} 
  alt={movie.title || movie.name || 'poster'} 
  fill 
  sizes="(max-width: 768px) 100vw, 33vw" 
  style={{ objectFit: 'cover' }} 
  priority 
/>
        </div>
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{movie.title || movie.name}</h1>
          <p className="text-gray-300 mb-4">{movie.overview}</p>
          <p className="text-sm">Release date: {movie.release_date || 'N/A'}</p>
          <p className="text-sm">Rating: {movie.vote_average ?? 'N/A'}</p>
        </div>
      </div>
    </div>
  )
}
