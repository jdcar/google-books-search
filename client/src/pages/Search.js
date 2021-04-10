import React from 'react'
import Container from 'react-bootstrap/Container'
import SearchBox from '../components/SearchBox'
import Navbar from '../components/Navbar'
import ResultCard from '../components/ResultCard'

const Search = () => {
    //https://www.googleapis.com/books/v1/volumes?q=

    return (
        <>
            <Navbar />
            <Container>
                <SearchBox />
                <ResultCard />
            </Container>
        </>
    )
}
export default Search