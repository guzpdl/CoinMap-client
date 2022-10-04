import { useContext } from "react"
import { Container, Row, Card } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"
import getFavCoins from '../../services/userAxios.service'




const FavoriteCoins = ({details, userData, user}) => {

  console.log(userData.favorite_coins, details)  


    return(

        <Container>
        <Row>
            <h2>Your favorite coins!</h2>
            
            <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>{details.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        </Row>
        </Container>

        
    )

}

export default FavoriteCoins