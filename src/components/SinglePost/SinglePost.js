import React from 'react';
import { Button, Card } from 'react-bootstrap';

const SinglePost = (props) => {
    const {userId, id, title, body} = props.post;
    console.log(props.post);
    return (
        
        <Card>
            <Card.Header as="h5">{userId}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {body}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default SinglePost;