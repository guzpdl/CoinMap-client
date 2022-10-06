import { cloneElement, useEffect, useState } from "react";
import DetailsAxios from "../../../services/details";
import { Button, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./Comments.css";

const Comments = ({ coinId, detailsMD }) => {
  const detailsAxios = new DetailsAxios();

  const [newComment, setNewComment] = useState({});

//   console.log(newComment)

  const createNewComment = (eventHTML) => {
    eventHTML.preventDefault();
    detailsAxios.createComment(coinId, newComment).then((response) => {
    //   console.log(response);
      printComments()
    });
  };

  const updateNewComment = (eventHTML) => {
    const {name, value} = eventHTML.target
    setNewComment({...newComment, [name]: value})
  }


  const [comments, setComments] = useState([]);

  const printComments = () => {
    detailsAxios
      .getComments(coinId)
      .then((commentData) => {
        setComments(commentData);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteComment = (i) => {
    
    detailsAxios
    .deleteComment(i)
    .then(() => {
       printComments()
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    printComments(coinId);
  }, []);

  // console.log(detailsMD);

  return (
    <Container>
      <Row>
        <div className="divComments col-sm-5 col-md-6 col-12 pb-4">
          <h2>Comments section</h2>
          {comments.map((e, i) => {
            return (
              <div key={i} className="text-justify darker mt-4 float-right">
              
                {i % 2 === 0 ? 
                  <h4>{e}</h4>
                 : i % 2 !== 0 ? 
                  <div><p>{e}</p>
                  <Button className="mb-2" type="submit" variant="outline-info" onClick={()=> handleDeleteComment(detailsMD.comments[i])}>
                  Delete comment
                  </Button>
                  </div>
                 : 
                  <p> loading ...</p>
                }
              </div>
            );            
          })}

        </div>

        <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
          <div className="align-form">
            <Form onSubmit={createNewComment} className="form align-form">
              <Form.Group className="form-group">
                <h5>Leave a comment</h5>
                <Form.Label className="comment"></Form.Label>
                <Form.Control
                name="commentBody"
                onChange={updateNewComment}
                className="textBox"
                placeholder="Type in your comment"
                as="textarea"
                rows="5"
                style={{ backgroundColor: "white" }}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Button className="my-1" variant="outline-info" type="submit">
                  Post comment
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Comments;
