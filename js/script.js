"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "1");

const personalMovieDB = {
	count: +numberOfFilms,
	movies: {

	},
	actors:{

	},
	genres:[],
	privat: false
};
for(let i = 0; i < 2;i++){
	let nameOfFilm = prompt("Один из последних просмотренных фильмов?","");
	let rateOfFilm = +prompt("На сколько его оцените?","");
	// personalMovieDB.movies[prompt("Один из последних просмотренных фильмов?","")] = prompt("На сколько его оцените?","");
	personalMovieDB.movies[nameOfFilm] = rateOfFilm;
}

console.log(personalMovieDB['movies']);

