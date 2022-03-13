import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import PostCard from './PostCard';
import Pagination from '@mui/material/Pagination';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    // const [clickedPostId, setClickedPostId] = useState(null)

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


    const postPerPage = 5;
    const pagesVisited = pageNumber * postPerPage;

    const displayPage = posts.slice(pagesVisited, pagesVisited + postPerPage);

    const pageCount = Math.ceil(posts.length / postPerPage);

    const changePage = (e, p) => {
        setPageNumber(p-1);
    };

    // const handleDetailsButton = (e) =>{
    //     setClickedPostId(e);
    // }
    // console.log(clickedPostId);

    return (
        <Container fluid="xl" >
            <h1>All Post</h1>
            {
                displayPage.map(p => <PostCard key={p.id} post={p} ></PostCard>)
            }
            <Pagination
                count={pageCount}
                // defaultPage = {0}
                onChange={changePage}
                variant="outlined"
                color="warning"
                size="large"
            />


        </Container>
    );
};

export default Posts;