import React from 'react'
import Form from 'react-bootstrap/Form'
import SearchButton from '../components/SearchButton'

const SearchBox = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Control size="lg" type="text" placeholder="Enter search terms here" />
                <br></br>
                <SearchButton />
            </Form.Group>
        </Form>
    )
}

export default SearchBox