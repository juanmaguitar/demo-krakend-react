import axios from 'axios'

const URL_KRAKEND_ALL_CATEGORIZED_MOVIES = 'http://localhost:8080/'

const getAllCategorizedMovies = () =>
    axios.get(URL_KRAKEND_ALL_CATEGORIZED_MOVIES)