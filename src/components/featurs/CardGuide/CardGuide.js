import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CurrentDate from '../CurrentDate/CurrentDate';

function CardGuide(props){

    return(
        <Card style={{ width: '20rem', height: '20rem'}}>
        <Card.Body>
          <Card.Title>{props.category}: {props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          {/* <Button variant="secondary"><h6>{props.id}{props.btn}</h6></Button> */}
          <Card.Text><CurrentDate>{props.date}</CurrentDate></Card.Text>
        </Card.Body>
      </Card>
    )
}

export default CardGuide;



