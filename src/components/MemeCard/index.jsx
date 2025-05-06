import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function MemeCard({ name, url }) 
{
    return (
    <Card className='mt-5' style={{ margin:'10px', height:500 }}>

      <Card.Img variant="top" height={300} width={400} src={url} />

      <Card.Body>
        <Card.Title> <h5> { name } </h5> </Card.Title>
      </Card.Body>

      <Card.Footer className='d-grid'>
        <Link to={`/edit?image_url=${url}`}>
          <Button variant="outline-info"> 
          <FaEdit /> Use Template </Button>
        </Link>
      </Card.Footer>

    </Card>
    );
}

export default MemeCard;