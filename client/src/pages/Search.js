import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import Container from 'react-bootstrap/Container'
import Navbar from '../components/Navbar'


const Search = () => {
    //https://www.googleapis.com/books/v1/volumes?q=

    const [search, setSearch] = useState()

    const [books, setBooks] = useState("")

    function handleSearchButton(event) {
        event.preventDefault()
        console.log("Click")
        bookSearch()
    }

    function bookSearch() {

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
            .then(res => {
                
                setBooks(res.data.items)
                console.log(books)
            })
        // .then(setData(res))
    }

    return (
        <>
            <Navbar />
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="Enter search terms here"
                            onChange={event => setSearch(event.target.value)}
                            
                        />
                        <br></br>
                        <Button as="input" type="submit" value="Search"
                            onClick={handleSearchButton} />
                    </Form.Group>
                </Form>
                {books.length ? (
                    <div>
                        {books.map(book => {
                            return (
                                <Card>
                                <Card.Header as="h5">Featured</Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Title>{book.volumeInfo.title}</Card.Title>
                                            <Card.Text>
                                                <div>
                                                    <p>{book.volumeInfo.subtitle}</p>
                                                    <p>{book.volumeInfo.authors[0]}</p>
                                                    <p>{book.searchInfo.textSnippet}</p>
                                                </div>
                                            </Card.Text>
                                        </Col>
                                        <Col sm={2}>
                                            <Button href={book.volumeInfo.previewLink} variant="link">View</Button>{' '}
                                            <Button variant="primary">Save</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            )

                        })}
                    </div>
                    
                ) : (
                    <h3>No Books to Display</h3>
                )}





                {/* <Card>
                    <Card.Header as="h5">Featured</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title>Title</Card.Title>
                                <Card.Text>
                                    <div>
                                        <p>subtitle</p>
                                        <p>author</p>
                                        <p>summary</p>
                                    </div>
                                </Card.Text>
                            </Col>
                            <Col sm={2}>
                                <Button variant="primary">View</Button>{' '}
                                <Button variant="primary">Save</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card> */}
            </Container>
        </>
    )


}
export default Search