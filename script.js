document.getElementById("suggest-movie-btn").addEventListener("click", fetchRandomMovie);

function fetchRandomMovie() {
    // Fetch a random movie from TMDb (change 'tmdbApiKey' with your real key)
    const tmdbApiKey = 'YOUR_TMDB_API_KEY';
    const randomPage = Math.floor(Math.random() * 500) + 1;  // Random page number
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbApiKey}&language=en-US&page=${randomPage}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.results.length);
            const movie = data.results[randomIndex];
            displayMovie(movie);
        })
        .catch(error => console.error('Error fetching movie:', error));
}

function displayMovie(movie) {
    document.getElementById("movie-title").innerText = movie.title;
    document.getElementById("movie-cover").src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
    document.getElementById("movie-cover").alt = movie.title;
}