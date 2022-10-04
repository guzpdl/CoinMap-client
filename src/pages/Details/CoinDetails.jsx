import React from 'react'
import { useEffect, useState } from 'react';
import DetailsAxios from '../../services/details';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Details from '../../components/CoinDetails/Details/Details';



const CoinDetails = () => {

    
    const detailsAxios = new DetailsAxios()
    const [details, setDetails] = useState(null)
    const [detailsMD, setDetailsMD] = useState({})

    const { id } = useParams()
    console.log('PARAMS', id)

        const getDetails = (id) => {
            detailsAxios
                .coinData(id)
                .then(({data}) => {
                    // console.log('DENTRO DEL SERVICIO CONDATA', data)
                    setDetails(data)
                })
                .catch((err) => console.log(err))
        }

        const getDetailsMD = (id) => {
            detailsAxios
                .coinDataMD(id)
                .then(({data}) => {
                    // console.log('DENTRO DEL SERVICIO CONDATA', data[0])
                    setDetailsMD(data[0])
                })
                .catch((err) => console.log(err))
        }

        useEffect(() => {
            getDetails(id)
            getDetailsMD(id)
        }, [])

  return (
    <div>
        <Container>
            <Row>
              <Details details={details} detailsMD={detailsMD}/>   
            </Row>
        </Container>
    </div>
  )
}

export default CoinDetails