import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import Navbar from '../components/Navbar'
import API from '../utils/API'

const Saved = () => {

    const [saved, setSaved] = useState([])


    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res =>
                // console.log(res.data)
                setSaved(res.data)
            )
            //   .then(console.log(data))
            .catch(err => console.log(err));
    };


    function deleteBook(id) {
        console.log(id)
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    console.log(saved)
    return (
        <div>
            <Navbar />
            <Container>
                {saved.length ? (
                    <div>
                        {saved.map(book => {
                            return (
                                <Card>
                                    <Card.Header key={book._id} as="h5">{book.title}</Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col>
                                                {/* <Card.Title>{book.title}</Card.Title> */}
                                                <Card.Text>
                                                    {book.subtitle}
                                                </Card.Text>
                                                <Card.Text>
                                                    {book.author}
                                                </Card.Text>
                                                <Card.Text>
                                                    {book.description}
                                                </Card.Text>
                                        
                                            </Col>
                                        <Col sm={2}>
                                            <Button href={book.link} variant="link">View</Button>{' '}
                                            <Button onClick={() => deleteBook(book._id)} variant="primary">Delete</Button>
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

            </Container>
        </div >
    )
}
export default Saved