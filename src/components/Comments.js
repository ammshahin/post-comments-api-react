import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import React, { useState,useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import CommentCard from './CommentCard';

const Comments = () => {
    //const [id, setId] = useState(null);
    const [comments, setComments] = useState([]);

    //setId(useParams());

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
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
            <div className='d-flex justify-content-between p-1 mb-1 position-sticky fixed-top bg-info'>
            <h1>Comments of Post: {id}</h1>
            <Button onClick={()=> navigate("/")} variant="outlined" color="success">Previous{<FontAwesomeIcon icon="fa-solid fa-arrow-left" />}</Button>
            
           
           
            </div>
            
            {
                comments.map(comment => <CommentCard key = {comment.id} comment = {comment}></CommentCard>)
            }
        </Container>
    );
};

export default Comments;