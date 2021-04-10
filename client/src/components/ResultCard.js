import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Card from 'react-bootstrap/Card'
import ViewButton from '../components/ViewButton'
import SaveButton from '../components/SaveButton'

const ResultCard = () => {
    return (
        <div>
            <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                    <Row>
                        <Col>

                            <Card.Title>Title</Card.Title>
                            <Card.Text>
                                <p>subtitle</p>
                                <p>author</p>
                                <p>summary</p>
                            </Card.Text>
                        </Col>
                        <Col sm={2}>
                            <ViewButton />{' '}
                            <SaveButton />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ResultCard