import React from 'react';
import { Card } from 'react-bootstrap';

const CommentCard = (props) => {
    const { postId, id, name, email, body } = props.comment;
    // console.log(name);
    return (

        <Card className='mb-2 bg-success text-light'>
            <Card.Header as="h5">{name}</Card.Header>
            <Card.Body>
                <Card.Title>{email}</Card.Title>
                <Card.Text>
                    {body}
                </Card.Text>
                {/* <Link to={`comments/${id}`} >
                    <Button variant="outline-success" onClick={() => props.detailsBt(id)}>Details</Button>
                </Link> */}

            </Card.Body>
        </Card>

    );
};

export default CommentCard;