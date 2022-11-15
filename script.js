"use strict";

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for(let i = 0; i < 2; i++) {
    let titleOfFilm = prompt('Один из последних просмотреных фильмов?');
    let ratingOfFilm = prompt('На сколько его оцените?');
    personalMovieDB.movies[titleOfFilm] = ratingOfFilm;
}



console.log(personalMovieDB.movies);