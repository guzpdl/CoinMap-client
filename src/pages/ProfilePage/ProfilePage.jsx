import { useContext, useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import EditProfileModal from "../../components/EditProfile/EditProfile";
import FavoriteCoins from "../../components/FavoriteCoins/FavoriteCoins";
import { AuthContext } from "../../context/auth.context";
import DetailsAxios from "../../services/details";
import UserAxios from "../../services/userAxios.service";
import "./ProfilePage.css";

const ProfilePage = () => {
  // const navigate = useNavigate()
  const { user, isLoading, isLoggedIn } = useContext(AuthContext);
  const detailsAxios = new DetailsAxios();

  const [details, setDetails] = useState([]);
  const [userData, setuserData] = useState([]);
  
  const { id } = useParams();

  const getDetails = (idDetails) => {
    detailsAxios
      .coinData(idDetails)
      .then(({ data }) => {
        // console.log('DENTRO DEL SERVICIO CONDATA', data)
        setDetails(data);
      })
      .catch((err) => console.log(err));
  };



  const getFavs = async () => {
    UserAxios.getFavCoins(id)
    .then((data) => {
      setuserData(data)
    })
    .then((data) => {
      const { favorite_coins } = data;
      favorite_coins?.map((e) => {
        return (getDetails(e.id));
      })
      .catch((err) => console.log(err))
    });
    
  };

  // console.log('PARAMS', id)

  useEffect(() => {
    getFavs();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return isLoggedIn ? (
    <Container>
      <Row>
        <h1>{user.username}</h1>
        <p>e-mail: {user.email}</p>
        <EditProfileModal user={user} />
        <div className="panel">
          <div className="panel-body bio-graph-info">
            <FavoriteCoins details={details} User={user}  userData={userData}/>
          </div>
        </div>
      </Row>
    </Container>
  ) : (
    <p>Lo poneis vosotros ;D</p>
  );
};

export default ProfilePage;
