import React, { useState, useEffect } from 'react'

import Navbar from '../components/Navbar'
import API from '../utils/API'

const Saved = () => {

    const [books, setBooks] = useState([])


    useEffect(() => {
        loadBooks()
      }, [])
    
      // Loads all books and sets them to books
      function loadBooks() {
        API.getBooks()
          .then(res => 
            setBooks(res.data)
          )
          .catch(err => console.log(err));
      };



    return (
        <div>
            <Navbar />
        </div>
    )
}
export default Saved