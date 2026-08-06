document.addEventListener("DOMContentLoaded", function () {

    const movies = document.querySelectorAll(".movie-card");

    movies.forEach(movie => {
        movie.addEventListener("click", function () {

            const title = this.querySelector("h3").innerText;

            alert("Now Playing: " + title);

        });
    });

});