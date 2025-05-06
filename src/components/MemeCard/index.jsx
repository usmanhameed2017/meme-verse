import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';

function MemeCard({ name, url }) 
{
    return (
    <Card className='mt-5' style={{ margin:'10px', height:500 }}>

      <Card.Img variant="top" height={300} width={400} src={url} />

      <Card.Body>
        <Card.Title> <h5> { name } </h5> </Card.Title>
      </Card.Body>

      <Card.Footer className='d-grid'>
        <Button variant="outline-info" href={`/edit?image_url=${url}`}> 
        <FaEdit /> Use Template </Button>
      </Card.Footer>

    </Card>
    );
}

export default MemeCard;