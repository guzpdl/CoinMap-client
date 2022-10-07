import React, { useEffect, useState } from "react";
import { Pagination, Table } from "react-bootstrap";
import CoinRow from "./CoinRow/CoinRow";

const title = ['Fav', '#', 'Coin', 'Price', '1h', '24H', '7D', 'Total_Volume','Market Cap']
const TableCoins = ({coinList, search}) => {
       const filtered =  
        coinList.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase())| 
        coin.symbol.toLowerCase().includes(search.toLowerCase()))
    const [page, setPage] = useState()
    const [items, setItems] = useState([...coinList].slice(0, 10))


    const next= () => {
        const totalElements = filtered.length
        console.log(totalElements)
        const nextPage = page + 1
        const firstIndex = nextPage * 10

        if(firstIndex === totalElements)return;
        setItems([...coinList].slice(firstIndex, 10))
        setPage(nextPage)
        console.log("next!!!!");
    }

    const prev = () => {
        const totalElements = filtered.length
        const prevPage = page -1
        if (prevPage < 0)return ;
        const firstIndex = prevPage + 10

        if(firstIndex === totalElements)return;
        setItems([...coinList].slice(firstIndex, 10))
        setPage(prevPage)
        console.log("prevs!!!!");
    }

    console.log(items)

    useEffect(() => {
      
    }, [])
    

    
    return (
        <>
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
                {filtered  
                .map((coin, index)=>{
                    return (
                            <CoinRow coin={coin} key={index} index={index + 1}/>
                    )
                })}
            </tbody>
        </Table>  
        {/* <Pagination count={(filtered?.length/10).toFixed(0)}
         style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
          /> */}
        <Pagination className="d-flex justify-content-center">
        <Pagination.Prev onClick={prev}/>
        <Pagination.Next onClick={next}/>
        </Pagination>
        </>
       
    )
}

export default TableCoins