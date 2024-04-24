import React from 'react';
import { Card, Button } from 'react-bootstrap';
import party2 from "../resources/party2.jpg";


const Item = (): React.ReactElement => {
    return (
        <Card style={{ minWidth: '18rem', maxWidth: '47rem', margin: '20px' }}>
            <Card.Img variant="top" src={party2} />
            <Card.Body>
                <Card.Title>Example Card</Card.Title>
                <Card.Text>This is an example React card</Card.Text>
                <Button variant="primary">Example Button</Button>
            </Card.Body>
        </Card>
    );
};

export default Item;
