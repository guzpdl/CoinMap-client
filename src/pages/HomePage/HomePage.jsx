import { useEffect, useState } from 'react';
import CoinsAxios from '../../services/coins';
import TableCoins from "../../components/Market/CoinTable"
import { Table, Form } from "react-bootstrap";


const HomePage = () => {

    const coinsAxios = new CoinsAxios()
    const [coinList, setCoinList] = useState([])
    const [search, setSearch] = useState('')

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

    return(
        <>
            <div className="container">
                <div className="row">
                    <Form className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="Search a coin"
                            className="me-2 bg-dark text-light border-1 text-center mt-4"
                            onChange={el => setSearch(el.target.value)}
                            aria-label="Search"
                        />
                    </Form>
                    <TableCoins coinList={coinList} search={search}/>
                </div>
            </div>

        </>

    )
}

export default HomePage