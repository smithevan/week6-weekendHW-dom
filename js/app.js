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
