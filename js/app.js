document.addEventListener('DOMContentLoaded', () => {

  console.log('JS has loaded')

  const newFormElement = document.querySelector('#whole-form');
  newFormElement.addEventListener('submit', handleNewFormElementSubmit);

})

const handleNewFormElementSubmit = function (event) {
  event.preventDefault();
  const filmListItem = createFilmListItem(event.target);
  const filmList = document.querySelector('#film-list');
  filmList.appendChild(filmListItem);
  event.target.reset();
}

const createFilmListItem = function (form) {
  const filmListItem = document.createElement('li');
  filmListItem.classList.add('film-list-item');

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  filmListItem.appendChild(title);

  const director = document.createElement('h3');
  director.textContent = form.director.value;
  filmListItem.appendChild(director);

  const year = document.createElement('p');
  year.textContent = form.year.value;
  filmListItem.appendChild(year);

  const genre = document.createElement('p');
  genre.textContent = form.genre.value;
  filmListItem.appendChild(genre);


  return filmListItem;
}
