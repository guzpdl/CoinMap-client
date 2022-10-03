import React, { useContext, useEffect, useState } from "react";
import "../CoinTable.css"
import addDots from '../../../utils/addDots.util'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from "../../../context/auth.context";
import RegistryModal from "../../SignUp/SignUp";
import userAxiosService from "../../../services/userAxios.service";


const CoinRow = ({coin, index}) => {

    const {user, isLoggedIn} = useContext(AuthContext)


    const [favorite, setFavorite] = useState([]);

    // useEffect(() => {
    //     userAxios.
    // }, [favorite])

    
    const addToFavorite = (id) => {
         if (!favorite.includes(id))
         setFavorite(favorite.concat(id))
    }

    const removeFavorite = (id) => {
        let indexOfFav = favorite.indexOf(id)
        let updateFav = [...favorite.slice(0, indexOfFav), ...favorite.slice(index + 1)]
        setFavorite(updateFav)
    }


    return(
            <tr>
                <td>
                {/* <Link onClick={addToFavorite(coin.id) | removeFavorite(coin.id)}> */}

                <FontAwesomeIcon icon={faHeart} >
                { !isLoggedIn &&
                 <RegistryModal /> 
                }
                </FontAwesomeIcon>

                {/* <FontAwesomeIcon icon={faHeartCircleCheck} /> */}
                
                {/* </Link> */}
                </td>
                <td>{index}</td>
                <td>
                    <img src={coin.image} className="img-fluid me-4 coinLogo" alt="" />
                    <LinkContainer to={`/coins/${coin.id}`}>
                    <Link className="pointer name">{coin.name}</Link>
                    </LinkContainer>
                    <span className="ms-3 text-muted text-uppercase pointer">{coin.symbol}</span>
                </td>
                <td>${addDots(coin.current_price)}</td>
                <td style={coin.price_change_percentage_1h_in_currency > 0 ?{color: "#8dc647" } : coin.price_change_percentage_1h_in_currency === 0?{color: "gray"}:{color: "#e15241"} }>{coin.price_change_percentage_1h_in_currency.toFixed(2)}%</td>
                <td style={coin.price_change_percentage_24h_in_currency > 0 ?{color: "#8dc647" } : coin.price_change_percentage_24h_in_currency === 0?{color: "gray"} :{color: "#e15241"} }>{coin.price_change_percentage_24h_in_currency.toFixed(2)}%</td>
                <td style={coin.price_change_percentage_7d_in_currency > 0 ?{color: "#8dc647" }: coin.price_change_percentage_7dh_in_currency === 0?{color: "gray"} :{color: "#e15241"} }>{coin.price_change_percentage_7d_in_currency.toFixed(2)}%</td>
                <td>${addDots(coin.total_volume)}</td>
                <td>${addDots(coin.market_cap)}</td>
            </tr>
    )
}

export default CoinRow