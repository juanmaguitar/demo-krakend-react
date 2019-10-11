import React, {useState, useEffect} from 'react'

import {getAllCategorizedMovies} from '../../services/'

const ListCategorizedMovies = () => {

    const [categorizedMovies, setCategorizedMovies] = useState([])
    
    useEffect(() => {
        getAllCategorizedMovies().then(setCategorizedMovies)
    }, [])

    return (
    <div>
        {
            categorizedMovies && Object.keys(categorizedMovies).map(category => {
                return (
                <div key={category}>
                <h2>{category}</h2>
                <ul>
                </ul>
                    {
                        categorizedMovies[category].map(({id, title}) => 
                        (
                        <li key={id}>{title}</li>
                    ))
                }
                </div>
                )
            })
        }
    </div>)

}

export default ListCategorizedMovies
