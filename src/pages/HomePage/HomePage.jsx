import { useEffect, useState } from 'react';
import React from 'react'
import CoinsAxios from '../../services/coins';
import TableCoins from "../../components/Market/CoinTable"
import { Row, Container } from "react-bootstrap";
import SearchBar from '../../components/searchBar/searchBar';
import Banner from '../../components/Banner/Banner';
import GlobalData from '../../components/GlobalData/GlobalData';


const HomePage = () => {

    const coinsAxios = new CoinsAxios()
    const [coinList, setCoinList] = useState([])
    const [search, setSearch] = useState('')
    const [trending, setTrending] = useState([])
    const [global, setGlobal] = useState([])

    

    
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

    const globalData = () => {
        coinsAxios
            .global()
            .then((global) => {
                setGlobal(global)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        globalData()
    }, [])



    
    return(
        <>
            <Container>
                <Row>
                    <Banner trending={trending}/> 
                    <div className='container '>
                        <div className="row justify-content-center">
                        <GlobalData className="col-6" global={global}/>
                        <SearchBar className="col-6" setSearch={setSearch}/>
                        </div>
                    </div>
                    <TableCoins coinList={coinList} search={search}/>
                </Row>
            </Container>

        </>

    )
}

export default HomePage