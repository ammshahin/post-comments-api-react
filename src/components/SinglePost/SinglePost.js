import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SinglePost = (props) => {
    const { userId, id, title, body } = props.post;
    //console.log(props.post);
    return (

        <Card className='mb-2'>
            <Card.Header as="h5">{id}</Card.Header>
            <Card.Body>
                <Card.Title>User No: {userId}</Card.Title>
                <Card.Title>Title: {title}</Card.Title>

                <Card.Text>
                    {body}
                </Card.Text>
                <Link to={`comments/${id}`} >
                    <Button variant="outline-success" onClick={() => props.detailsBt(id)}>Details</Button>
                </Link>

            </Card.Body>
        </Card>
    );
};

export default SinglePost;