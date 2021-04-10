import React from 'react'
import Form from 'react-bootstrap/Form'

const SearchBox = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Control size="lg" type="text" placeholder="Enter search terms here" />
            </Form.Group>
        </Form>
    )
}

export default SearchBox