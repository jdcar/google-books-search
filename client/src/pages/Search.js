import React, { useState } from 'react'
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

    const [save, setSave] = useState({
        title: "",
        subtitle: "",
        author: "",
        link: "",
        image: ""
    })

    function handleSearchButton(event) {
        event.preventDefault()
        console.log("Click")
        bookSearch()
    }

    function bookSearch() {

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
            .then(res => {

                setBooks(res.data.items)
                console.log(res.data.items)
            })
        // .then(setData(res))
    }

    function handleSaveBook(event) {
        event.preventDefault()

        const title = event.target.parentNode.parentNode.parentNode.parentNode.children[0].innerHTML
        const subtitle = event.target.parentNode.parentNode.children[0].children[0].innerHTML
        const author = event.target.parentNode.parentNode.children[0].children[1].innerHTML
        const description = event.target.parentNode.parentNode.children[0].children[2].innerHTML
        const link = event.target.parentNode.parentNode.children[0].children[3].innerHTML
        const image = event.target.parentNode.parentNode.children[1].children[0].innerHTML

        console.log(link)
        setSave({
            title: title,
            subtitle: subtitle,
            author: author,
            description: description,
            link: link,
            image: image
        })
        // console.log(event.target.parentNode.parentNode.children[0].children[2].innerHTML)
        console.log(save)
        saveBook()

    }

    function saveBook() {
        axios.post('/api/books', save)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // console.log(books)

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
                                <Card key={book.id}>
                                    <Card.Header as="h5"
                                        title={book.volumeInfo.title}
                                        value={book.volumeInfo.title}
                                        className="title">{book.volumeInfo.title}</Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col sm={8}>
                                                <Card.Title>{book.volumeInfo.subtitle}</Card.Title>
                                                <Card.Text>
                                                    {book.volumeInfo.authors[0]}
                                                </Card.Text>
                                                <Card.Text>
                                                    {book.volumeInfo.description}
                                                </Card.Text>
                                                <Card.Text style={{ display: 'none' }}>
                                                    {/* <p></p> */}
                                                    {book.volumeInfo.previewLink}
                                                </Card.Text>
                                            </Col>
                                            <Col>
                                                <Card.Text style={{ display: 'none' }}>
                                                    {/* <p></p> */}
                                                    {book.volumeInfo.imageLinks.thumbnail}
                                                </Card.Text>
                                                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                                            </Col>
                                            <Col sm={2}>
                                                <Button href={book.volumeInfo.previewLink} variant="link">View</Button>{' '}
                                                <Button
                                                    variant="primary"
                                                    onClick={handleSaveBook}
                                                >Save</Button>
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
        </>
    )


}
export default Search