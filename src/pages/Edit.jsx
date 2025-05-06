import React, { useState, useRef } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import TextField from '../components/TextField';
import { exportComponentAsJPEG } from 'react-component-export-image';
import { FaPlus, FaSave } from 'react-icons/fa';

function Edit() 
{
    // States
    const [count, setCount] = useState(0);
    const [params] = useSearchParams();

    // Reference
    const memeRef = useRef();

    return (
        <div>
            <Container>
                <div ref={memeRef}>
                    <Row className="mt-5">
                        <Col md='4' className="p-0">
                            <img src={params.get('image_url')} alt={params.get('image_url')} height={600} width={700} />
                        </Col>
                    </Row>

                    {/* Texts */}
                    {
                        Array.from({ length:count }, (_, index) => (
                            <Row key={index}>
                                <Col md='4' className="mt-1 p-0">
                                    <TextField />
                                </Col>
                            </Row>
                        ))
                    }
                </div>

                {/* Button */}
                <Row className="mt-2">
                    <Col className="p-0">
                        {/* Add Text */}
                        <Button variant='outline-info' 
                        onClick={() => setCount(count + 1)}>
                        <FaPlus/>  Add Text</Button>

                        {/* Save Meme */}
                        <Button variant='outline-success' className='ms-1' 
                        onClick={() => exportComponentAsJPEG(memeRef)}>
                        <FaSave />  Save</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Edit;