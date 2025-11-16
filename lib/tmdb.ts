import { Movie } from "../types";

const API_KEY = process.env.TMDB_API_KEY;
const BASE = 'https://api.themoviedb.org/3';

if (!API_KEY) {
  // For dev, it's okay to continue; runtime fetches will fail until env var is set.
  console.warn('TMDB_API_KEY is not set. Create .env.local with TMDB_API_KEY.');
}

export async function fetchMovies(category: string = 'popular'): Promise<Movie[]> {
  const url = `${BASE}/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch movies: ' + res.statusText);
  const data = await res.json();
  return data.results || [];
}

export async function fetchMovieById(id: string | number): Promise<Movie> {
  const url = `${BASE}/movie/${id}?api_key=${API_KEY}&language=en-US`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch movie by id: ' + res.statusText);
  return res.json();
}

export function posterUrl(path?: string | null, size = 'w500') {
  if (!path) return '';
  return `https://image.tmdb.org/t/p/${size}${path}`;
}
