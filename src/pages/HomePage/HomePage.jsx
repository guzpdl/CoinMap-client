import { useEffect, useState } from 'react';
import React from 'react'
import CoinsAxios from '../../services/coins';
import TableCoins from "../../components/Market/CoinTable"
import { Row, Container } from "react-bootstrap";
import SearchBar from '../../components/searchBar/searchBar';
import Banner from '../../components/Banner/Banner';


const HomePage = () => {

    const coinsAxios = new CoinsAxios()
    const [coinList, setCoinList] = useState([])
    const [search, setSearch] = useState('')
    const [trending, setTrending] = useState([])

    

    
    const getAll = () => {
        coinsAxios
            .getCoinList()
            .then((coinList) => {
                setCoinList(coinList)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getAll()
    }, [])

   
    const getTrending = () => {
        coinsAxios
            .trend()
            .then((trending) => {
                setTrending(trending)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getTrending()
    }, [])



    
    return(
        <>
            <Container>
                <Row>
                    <Banner trending={trending}/> 
                    <SearchBar setSearch={setSearch}/>
                    <TableCoins coinList={coinList} search={search}/>
                </Row>
            </Container>

        </>

    )
}

export default HomePage