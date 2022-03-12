import React, { useState,useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CommentCard from '../comment_card/CommentCard';

const Comments = () => {
    //const [id, setId] = useState(null);
    const [comments, setComments] = useState([]);

    //setId(useParams());

    const id = useParams();

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id.id}/comments`)
      .then(response => {
          if (response.ok){
              return response.json()
          }
          throw response
          
      })
      .then(data => setComments(data))
      .catch(error => console.error("Can't fetch data: ", error))
    
      
    }, [id])
    

    console.log(id);
     console.log(comments);
    return (
        <Container fluid>
            <h1>Comments</h1>
            {
                comments.map(comment => <CommentCard id = {comment.id} comment = {comment}></CommentCard>)
            }
        </Container>
    );
};

export default Comments;