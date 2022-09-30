import React from "react";
import { Table } from "react-bootstrap";
import CoinRow from "./CoinRow/CoinRow";

const title = ['#', 'Coin', 'Price', '1h', '24H', '7D', 'Total_Volume','Market Cap']
const TableCoins = ({coinList, search}) => {
       const filtered = coinList.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase())| 
      coin.symbol.toLowerCase().includes(search.toLowerCase())) 
    
    return (
        
        <Table className="table mt-5 table-hover tableColor">
            <thead className="tableHead">
                <tr className="pointer">
                    {title.map((title, index) =>{
                        return(
                            <th key={index}>{title}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {filtered.map((coin, index)=>{
                    return (
                            <CoinRow coin={coin} key={index} index={index + 1}/>
                    )
                })}
            </tbody>
        </Table> 
    )
}

export default TableCoins