import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SinglePost from '../SinglePost/SinglePost';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [clickedPostId, setClickedPostId] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response
            })
            .then(data => setPosts(data))
            .catch(error => console.error("Can't fetch data: ", error))


    }, [])


    const handleDetailsButton = (e) =>{
        setClickedPostId(e);
    }
    console.log(clickedPostId);

    return (
        <Container fluid = "xl" >
            <h1>All Post</h1>
            {
                posts.map(p => <SinglePost key={p.id} post={p} detailsBt = {handleDetailsButton}></SinglePost>)
            }
        </Container>
    );
};

export default Posts;