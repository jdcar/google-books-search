import React, { useState, useEffect } from 'react'
import axios from 'axios'


import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const SearchBox = (props) => {

    // const [books, setBooks] = useState()
    

    return (
        <Form>
            <Form.Group>
                <Form.Control size="lg" type="text" placeholder="Enter search terms here" 
                onChange={event => setSearch(event.target.value)}
                {...props}
                />
                <br></br>
                <Button as="input" type="submit" value="Search"
                onClick={handleSearchButton} />
            </Form.Group>
        </Form>
    )
}

export default SearchBox