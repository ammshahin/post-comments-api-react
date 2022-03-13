import React, { useState,useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CommentCard from './CommentCard';

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
        <Container fluid = 'xl'>
            <div className='d-flex justify-content-center p-1 mb-1 position-sticky fixed-top bg-info'>
            <h1>Comments of Post: {id.id}</h1>
            </div>
            
            {
                comments.map(comment => <CommentCard id = {comment.id} comment = {comment}></CommentCard>)
            }
        </Container>
    );
};

export default Comments;