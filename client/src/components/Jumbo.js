import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Jumbo = () => {
    return (
        <Jumbotron fluid>
            <Container>
                <h1 style={{textAlign:"center"}}>React Google Books Search</h1>
            </Container>
        </Jumbotron>
    )
}

export default Jumbo