import React from "react";
import { Table } from "react-bootstrap";
import CoinRow from "./CoinRow";

const title = ['#', 'Coin', 'Price', 'Price Change 1h', 'Price Change 24H', 'Price Change 7D', 'Total_Volume','Market Cap']
const TableCoins = ({coinList}) => {
    // console.log(coinList)
    
    return (
        <Table className="table mt-5 table-hover tableColor">
            <thead>
                <tr className="pointer">
                    {title.map((title, index) =>{
                        return(
                            <td key={index}>{title}</td>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {coinList.map((coin, index)=>{
                    console.log(coin, (index +1))
                    return (
                            <CoinRow coin={coin} key={index} index={index + 1}/>
                    )
                    // console.log(coins)
                })}
            </tbody>
        </Table> 
    )
}

export default TableCoins