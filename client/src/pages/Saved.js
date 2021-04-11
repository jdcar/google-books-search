import React, { useState, useEffect } from 'react'

import Navbar from '../components/Navbar'
import API from '../utils/API'

const Saved = () => {

    const [books, setBooks] = useState([])


    useEffect(() => {
        API.getBooks()
            .then(response => {
                console.log(response.data)
                // setBooks(response.data)
            }
            )
            .catch(err => console.log(err))
    }, [])



    return (
        <div>
            <Navbar />
        </div>
    )
}
export default Saved