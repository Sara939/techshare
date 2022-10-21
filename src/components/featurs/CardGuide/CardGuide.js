import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardGuide(props){

    return(
        <Card style={{ width: '20rem', height: '25rem' }}>
        {/* <Card.Img variant="top" src={props.videosrc} /> */}
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
          {props.text}
          </Card.Text>
          <Button variant="primary"><h1>{props.id} </h1></Button>
        </Card.Body>
      </Card>
    )
}

export default CardGuide;



