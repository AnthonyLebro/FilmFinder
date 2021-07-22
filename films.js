const movieDiv = document.querySelector('#movies');
const modalDiv = document.getElementsByClassName('modal-content')[0];
const form = document.querySelector('form');
const input = document.querySelector('input');
const apikey = prompt("Quelle est ta clé API pour OMDb?");
const apiUrl = `https://www.omdbapi.com/?apikey=${apikey}`;