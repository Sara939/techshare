import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Deletbutton from "../Deletbutton/Deletbutton"

function CardGuide(props){

    return(
        <Card style={{ width: '20rem', height: '20rem'}}>
        {/* <Card.Img variant="top" src={props.videosrc} /> */}
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
          {props.text}
          </Card.Text>
          <Button className='crdbtn'><h6>{props.id}{props.btn}</h6></Button>
        </Card.Body>
      </Card>
    )
}

export default CardGuide;



