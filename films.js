const movieDiv = document.querySelector('#movies');
const modalDiv = document.getElementsByClassName('modal-content')[0];
const form = document.querySelector('form');
const input = document.querySelector('input');
const apikey = prompt("Quelle est ta clé API pour OMDb?");
const apiUrl = `https://www.omdbapi.com/?apikey=${apikey}`;

form.addEventListener("submit", handleSubmit);

//handle the submitted value of the form
function handleSubmit(e) {
  e.preventDefault();
  //get the value input in a readable format for the API call
  let inputReadyForUrl = formatInput(input.value);

  //launch the API request and return an object of movies
  postRequest(inputReadyForUrl);
}

//set the input value to a useable string for the API request.
function formatInput(value) {
  let useableString = '';
  return value.toLowerCase().split(' ').join('+');
}

//async function to show movies from the chosen request
const postRequest = async (searchedMovie) => {
  const response = await fetch(`${apiUrl}&s=${searchedMovie}`);
  const data = await response.json();
  showMovies(data.Search);
  console.log(data.Search);