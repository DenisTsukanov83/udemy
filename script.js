"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

function detectPersonalLevel() {
    if(numberOfFilms < 10) {
        alert('Просмотренно довольно мало фильмов');
    }
    else if(numberOfFilms >= 10 && numberOfFilms < 30) {
        alert('Вы классический зритель');
    }
    else if(numberOfFilms >= 30) {
        alert('Вы киноман');
    }
    else {
        alert('Произошла ошибка');
    }
}
detectPersonalLevel();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};



function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
    
        let titleOfFilm = prompt('Один из последних просмотреных фильмов?');
        let ratingOfFilm = prompt('На сколько его оцените?');
    
        if(titleOfFilm !== '' && titleOfFilm !== null && ratingOfFilm !== '' && ratingOfFilm != null) {
            personalMovieDB.movies[titleOfFilm] = ratingOfFilm;
    
        }
        else {
            alert('Вы ввели пустую строку');
            i--;
        }
    
        if(titleOfFilm.length > 50) {
            alert('Вы ввели слишком длинное название. Не больше 50 символов');
            i--;
        }
        
        
    }
}
rememberMyFilms();

function showMyDB() {
    if(personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
    else {
        return;
    }
}
showMyDB();

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
    
}
writeYourGenres()
console.log(personalMovieDB.movies);


