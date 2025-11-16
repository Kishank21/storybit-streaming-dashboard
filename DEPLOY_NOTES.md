# Deployment notes

1. On Vercel, set an environment variable:
   - Key: TMDB_API_KEY
   - Value: <your_tmdb_api_key>

2. Build & deploy. The app uses server-side fetches so the API key remains server-side.

3. Confirm that images load (image domains include image.tmdb.org in next.config.js).

