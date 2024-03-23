
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2MxZGQ1YjNkNzViNTVmNGRiMzU5OWJhYWNkNDNhZCIsInN1YiI6IjYxZmZhYTMxMWZkMzZmMjI0YTEyMzBkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JJlV0CpnaHI9v_dfHQ7gkEKmfOyglq_18pf5qUHkxvc'
//     }
// }

export const fetcRatedMovies = async () => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2MxZGQ1YjNkNzViNTVmNGRiMzU5OWJhYWNkNDNhZCIsInN1YiI6IjYxZmZhYTMxMWZkMzZmMjI0YTEyMzBkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JJlV0CpnaHI9v_dfHQ7gkEKmfOyglq_18pf5qUHkxvc'
        }
    }

    const res = await fetch(url, options)
    if (!res.ok) {
        throw new Error("failed to ffetch movies");

    }
    const json = await res.json()
    return json.results


}

export const fetchMoviesDetails = async (id: number) => {

    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2MxZGQ1YjNkNzViNTVmNGRiMzU5OWJhYWNkNDNhZCIsInN1YiI6IjYxZmZhYTMxMWZkMzZmMjI0YTEyMzBkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JJlV0CpnaHI9v_dfHQ7gkEKmfOyglq_18pf5qUHkxvc'
        }
    }
    const res = await fetch(url, options)
    if (!res.ok) {
        throw new Error("failed to ffetch movies");

    }
    const json = await res.json()
    return json

}