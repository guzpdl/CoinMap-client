import { cloneElement, useEffect, useState } from "react"
import DetailsAxios from "../../../services/details"
import { Button, Container, Row } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import './Comments.css'


const Comments = ({coinId}) => {

    console.log(coinId)

    const detailsAxios = new DetailsAxios()

    const [comments, setComments] = useState([])

    const printComments = () => {

        detailsAxios
        .getComments(coinId)
        .then((commentData) => {
             setComments(commentData)
        })
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        printComments(coinId)
    }, [])

    console.log(comments)

    return(

        <Container>
            <Row>
                        <div className="col-sm-5 col-md-6 col-12 pb-4">
            <h2>Comments section</h2>
            {
                comments.map((e, i) => {
                    return (
                        
                        <div className="text-justify darker mt-4 float-right">
                        {
                        i%2===0 ?
                        <h4>{e}</h4>
                        : i%2 !== 0 ?
                        <p>{e}</p> :
                        <p> loading ...</p>
                        }
                        </div>
                    )
                })
            }
                        </div>
            
            <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
            <div className="align-form">

            <Form className="form align-form">
            <Form.Group className="form-group">
            <h5>Leave a comment</h5>
            <Form.Label className="comment"></Form.Label>
            <Form.Control className="textBox" as='textarea' rows='5' style={{backgroundColor: 'white'}}>
            </Form.Control>
            </Form.Group>
            <Form.Group>
                <Button className="my-1" variant="outline-info" type='submit'>
                Post comment
                </Button>
            </Form.Group>
            </Form>

            </div>
            </div>
            </Row>
        </Container>

    )
}

export default Comments