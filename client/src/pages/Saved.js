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
                                <Card.Header as="h5">{book.title}</Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Title>{book.title}</Card.Title>
                                            <Card.Text>
                                                <div>
                                                    <p>{book.subtitle}</p>
                                                    <p>{book.authors}</p>
                                                    {/* <p>{book.summary}</p> */}
                                                </div>
                                            </Card.Text>
                                        </Col>
                                        <Col sm={2}>
                                            <Button href={book.link} variant="link">View</Button>{' '}
                                            <Button variant="primary">Delete</Button>
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
        </div>
    )
}
export default Saved