import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SinglePost from '../SinglePost/SinglePost';

const Posts = () => {
    const [posts, setPosts] = useState([]);

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

    // console.log(posts);

    return (
        <Container fluid>
            {
                posts.map(p => <SinglePost key={p.id} post={p}></SinglePost>)
            }
        </Container>
    );
};

export default Posts;