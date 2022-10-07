import React from 'react'
import { useEffect, useState } from 'react';
import DetailsAxios from '../../services/details';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Details from '../../components/CoinDetails/Details/Details';
import "./CoinDetails.css"
import Graphics from '../../components/CoinDetails/Chart/Chart';
import Comments from '../../components/CoinDetails/Comments/Comments';


const CoinDetails = () => {

    
    const detailsAxios = new DetailsAxios()
    const [details, setDetails] = useState(null)
    const [detailsMD, setDetailsMD] = useState({})
    const [historicalData, setHistoricalData] = useState([])
    const [days, setDays] = useState(1)
    // const [interval, setInterval] = useState(1)
// console.log(days)
    const { id } = useParams()
    console.log(days)
    // console.log('PARAMS', id)

        const getDetails = (id) => {
            detailsAxios
                .coinData(id)
                .then(({data}) => {
                    setDetails(data)
                })
                .catch((err) => console.log(err))
        }

        const getDetailsMD = (id) => {
            detailsAxios
                .coinDataMD(id)
                .then(({data}) => {
                    setDetailsMD(data[0])
                })
                .catch((err) => console.log(err))
        }

        const getChart = (id) => {
            detailsAxios
                .historicalChart(id)
                .then(({data}) => {
                    // console.log('DENTRO DEL SERVICIO CONDATA', data.prices)
                    setHistoricalData(data)
                })
                .catch((err) => console.log(err))
        }

        useEffect(() => {
            getDetails(id)
            getDetailsMD(id)
            getChart(id)
        }, [])

  return (
    <>
                <Details details={details} detailsMD={detailsMD}/> 
                <Graphics detailsMD={detailsMD} 
                days={days} 
                historicalData={historicalData} 
                setDays={setDays}
                />
                <div >
                  
                <Comments coinId={id} detailsMD={detailsMD}/>

                </div>
    </>
  )
}

export default CoinDetails