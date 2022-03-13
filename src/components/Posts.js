import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import PostCard from './PostCard';
import Pagination from '@mui/material/Pagination';
import { Grid } from '@mui/material';

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


    const postPerPage = 6;
    const pagesVisited = pageNumber * postPerPage;

    const displayPage = posts.slice(pagesVisited, pagesVisited + postPerPage);

    const pageCount = Math.ceil(posts.length / postPerPage);

    const changePage = (e, p) => {
        setPageNumber(p - 1);
    };

    // const handleDetailsButton = (e) =>{
    //     setClickedPostId(e);
    // }
    // console.log(clickedPostId);

    return (
        <Container fluid="xl" >
            <div className='d-flex justify-content-center p-1 mb-1 position-sticky fixed-top bg-info'>
                <h1>All Post</h1>
            </div>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                {
                    displayPage.map(p => <PostCard key={p.id} post={p} ></PostCard>)
                }


            </Grid>

            <Container  fluid = 'md' className='d-flex justify-content-center p-2 position-sticky fixed-bottom '>
                <Pagination
                    count={pageCount}
                    // defaultPage = {0}
                    onChange={changePage}
                    variant="outlined"
                    color="warning"
                    size="large"
                />
            </Container>



        </Container>
    );
};

export default Posts;