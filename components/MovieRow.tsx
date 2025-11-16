'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Movie } from '../types'
import { posterUrl } from '../lib/tmdb'

export default function MovieRow({ movies, categoryTitle }: { movies: Movie[], categoryTitle: string }) {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-2">{categoryTitle}</h2>
      <div className="flex space-x-3 overflow-x-auto pb-2">
        {movies.map(m => (
          <Link key={m.id} href={`/movie/${m.id}`} className="flex-none w-36 md:w-48 hover:scale-105 transition-transform">
            <div className="relative h-52 md:h-64 rounded overflow-hidden bg-gray-800">
              <Image src={posterUrl(m.poster_path)} alt={m.title || m.name || 'poster'} fill sizes="(max-width: 768px) 50vw, 20vw" style={{objectFit: 'cover'}} />
            </div>
            <p className="mt-2 text-sm">{m.title || m.name}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
