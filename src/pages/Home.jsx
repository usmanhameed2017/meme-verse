import React, { useState, useEffect } from 'react'
import { fetchMemes } from '../api/meme';
import MemeCard from '../components/MemeCard';
import { Col, Container, Row } from 'react-bootstrap';

function Home() 
{
    // State
    const [memes, setMemes] = useState([]);

    // Fetch memes
    useEffect(() => {
        fetchMemes()
        .then(response => setMemes(response.data.memes))
        .catch(error => console.log(error));
    },[]);

    return (
        <>
            <Container>
                <Row>
                {
                    memes.map(meme => (
                        <Col key={meme.name} md='4'>
                            <MemeCard name={meme.name} url={meme.url} />
                        </Col>
                    ))
                }
                </Row>
            </Container>
        </>
    );
}

export default Home;