import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardGuide(props){

    return(
        <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src={props.videosrc} /> */}
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
          {props.text}
          </Card.Text>
          <Button variant="primary">TO More Info</Button>
        </Card.Body>
      </Card>
    )
}

export default CardGuide;



