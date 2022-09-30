import { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import { AuthContext } from '../../context/auth.context'
import './ProfilePage.css'


const ProfilePage = () => {

  const {user} = useContext(AuthContext)
  console.log(user)

  return (
    
    <Container >
      <Row > 

      <div className="profile-nav col-md-3">
      <div className="panel">
          <div className="user-heading round">
              <h1>{user.username}</h1>
              <p>{user.email}</p>
          </div>
          </div>
          </div>
          <div className="panel">
          <div className="bio-graph-heading">
              Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna metus.
          </div>
          <div className="panel-body bio-graph-info">
              <h1>Bio Graph</h1>
              <div className="row">
                  <div className="bio-row">
                      <p><span>First Name </span>: Camila</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Last Name </span>: Smith</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Country </span>: Australia</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Birthday</span>: 13 July 1983</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Occupation </span>: UI Designer</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Email </span>: jsmith@flatlab.com</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Mobile </span>: (12) 03 4567890</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Phone </span>: 88 (02) 123456</p>
                  </div>
              </div>
          </div>
      </div>

      </Row>
    </Container>


  )
}

export default ProfilePage