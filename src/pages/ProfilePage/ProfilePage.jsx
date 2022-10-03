import { useContext } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import EditProfileModal from "../../components/EditProfile/EditProfile";
import { AuthContext } from "../../context/auth.context";
import "./ProfilePage.css";

const ProfilePage = () => {
  const { id } = useParams();

  // const navigate = useNavigate()

  const { user, isLoading, isLoggedIn } = useContext(AuthContext);
  console.log(user);

if (isLoading) {
  return <p>Loading...</p>
}

  return isLoggedIn ? (
    <Container>
      <Row>
        <h1>{user.username}</h1>
        <p>e-mail: {user.email}</p>
        <EditProfileModal user={user} />
        <div className="panel">
          <div className="panel-body bio-graph-info">
            <h2>Favorite coins</h2>
          </div>
        </div>
      </Row>
    </Container>
  ) : (
    <p>Lo poneis vosotros ;D</p>
  );
};

export default ProfilePage;
