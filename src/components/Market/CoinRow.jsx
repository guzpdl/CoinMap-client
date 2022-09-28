import React from "react";
import "./CoinTable.css"
const CoinRow = ({coin, index}) => {
    function addDots(number){
       return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    }

    return(
            <tr>
                <td>{index}</td>
                <td>
                    <img src={coin.image} className="img-fluid me-4 coinLogo" alt="" />
                    <span className="pointer">{coin.name}</span>
                    <span className="ms-3 text-muted text-uppercase pointer">{coin.symbol}</span>
                </td>
                <td>{addDots(coin.current_price)}$</td>
                <td style={coin.price_change_percentage_1h_in_currency > 0 ?{color: "green" } : coin.price_change_percentage_1h_in_currency == 0?{color: "gray"}:{color: "red"} }>{coin.price_change_percentage_1h_in_currency.toFixed(2)}%</td>
                <td style={coin.price_change_percentage_24h_in_currency > 0 ?{color: "green" } : coin.price_change_percentage_24h_in_currency == 0?{color: "gray"} :{color: "red"} }>{coin.price_change_percentage_24h_in_currency.toFixed(2)}%</td>
                <td style={coin.price_change_percentage_7d_in_currency > 0 ?{color: "green" }: coin.price_change_percentage_7dh_in_currency == 0?{color: "gray"} :{color: "red"} }>{coin.price_change_percentage_7d_in_currency.toFixed(2)}%</td>
                <td>{addDots(coin.total_volume)}$</td>
                <td>{addDots(coin.market_cap)}$</td>
            </tr>
    )
}

export default CoinRow