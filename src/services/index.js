import axios from 'axios'

const URL_KRAKEND_ALL_CATEGORIZED_MOVIES = 'http://localhost:8080/categorized-movies?api_key=ba09f3c8c6c830377b422df18cfa833e'

export const getAllCategorizedMovies = () =>
    axios.get(URL_KRAKEND_ALL_CATEGORIZED_MOVIES)
        .then(({data}) => data)