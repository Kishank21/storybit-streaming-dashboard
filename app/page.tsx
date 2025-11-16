import React from 'react'
import { fetchMovies } from '../lib/tmdb'
import Hero from '../components/Hero'
import MovieRow from '../components/MovieRow'
import { Movie } from '../types'

export default async function HomePage() {
  // Server-side fetches
  const popular = await fetchMovies('popular').catch(() => []) as Movie[]
  const topRated = await fetchMovies('top_rated').catch(() => []) as Movie[]
  const upcoming = await fetchMovies('upcoming').catch(() => []) as Movie[]

  const heroMovie = popular.length ? popular[0] : topRated[0]

  return (
    <div className="pt-20">
      <Hero movie={heroMovie} />
      <MovieRow movies={popular.slice(0,12)} categoryTitle="Popular" />
      <MovieRow movies={topRated.slice(0,12)} categoryTitle="Top Rated" />
      <MovieRow movies={upcoming.slice(0,12)} categoryTitle="Upcoming" />
    </div>
  )
}
