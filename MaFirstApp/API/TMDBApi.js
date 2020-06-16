const API_TOKEN = "02e055f1c5a2d791d95c7cfd7f77f7c7"

export function getFilmsFromApiWithSearchedText(text, page){
  const url = 'https://api.themoviedb.org/3/search/movie?api_key='
    + API_TOKEN + '&language=fr&query=' + text + '&page=' + page
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => {console.log(error); throw error})
}

export function getImageFromApi (name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}

export function getFilmDetailFromApi(id) {
    const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr'
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error))
}
