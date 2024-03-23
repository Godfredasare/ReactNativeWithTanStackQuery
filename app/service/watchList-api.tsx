export const addToWatchList = async (movieId: number) => {
    const url = 'https://api.themoviedb.org/3/account/11890950/watchlist';
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2MxZGQ1YjNkNzViNTVmNGRiMzU5OWJhYWNkNDNhZCIsInN1YiI6IjYxZmZhYTMxMWZkMzZmMjI0YTEyMzBkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JJlV0CpnaHI9v_dfHQ7gkEKmfOyglq_18pf5qUHkxvc'
        },
        body: JSON.stringify({ media_type: 'movie', media_id: movieId, watchlist: true })
    };

    const res = await fetch(url, options)
    if (!res.ok) {
        throw new Error("Error adding watchList");
    }
    const json = await res.json()
    return json
}

export const fetchWatchList = async () => {
    const url = 'https://api.themoviedb.org/3/account/11890950/watchlist/movies?language=en-US&page=1&sort_by=created_at.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2MxZGQ1YjNkNzViNTVmNGRiMzU5OWJhYWNkNDNhZCIsInN1YiI6IjYxZmZhYTMxMWZkMzZmMjI0YTEyMzBkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JJlV0CpnaHI9v_dfHQ7gkEKmfOyglq_18pf5qUHkxvc'
  }
};

const res = await fetch(url, options)
if (!res.ok) {
    throw new Error("Error adding watchList");
}
const json = await res.json()
return json.results
}
