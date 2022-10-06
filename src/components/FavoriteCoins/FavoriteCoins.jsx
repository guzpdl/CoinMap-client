import { Container, Row, Card } from "react-bootstrap"
import ListGroup from 'react-bootstrap/ListGroup';




const FavoriteCoins = ({ userData, user}) => {

  // console.log(userData.favorite_coins) 
  console.log(userData);

  const favData = userData.favorite_coins

  
  return(
    
    favData?.map((e, index) =>    {
      return(
        <div key={index} className="">
    <Container>
        <Row>
        <Card className="my-5 col-2 d-flex" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={e.thumb} />
          <Card.Body>
            <Card.Title>{e.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
            <ListGroup.Item>{e.max_supply}</ListGroup.Item>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{e.currentPriceUsd}</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        </Row>
        </Container>
        </div>
        )
      })

        
    )

}

export default FavoriteCoins