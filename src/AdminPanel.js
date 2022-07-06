import Navibar from "./Navbar";
import AdminPanelCards from "./AdminPanelCards";
import { Container, Row, Col, CardGroup, Button } from "react-bootstrap";

import { func } from "prop-types";

function AdminPanel() {

  // function getData(values){

  //   console.log(values)
  //   Axios.post("http://localhost:3001/insert", {
  //     quizQuestions: values
  //   })

  // }

  
  // function postData(values){
  //   Axios.post("http://localhost:3001/insert", {
  //     quizQuestions: values
  //   })
  //   console.log(values)
  // }
  return (
    <>
      <Navibar />
      <Container className="apPage ">
        <h1>Build your own quiz</h1>
        <h5>
          Generate your own unique link of quiz by typing your own MCQ with up
          to 2 correct answers and difficulty level from 1-10!
        </h5>
        {/* <Row>
          <Col> <AdminPanelCardsTest  /> </Col>
          <Col> <AdminPanelCardsTest /> </Col>
        </Row>
        <Row>
          <Col> <AdminPanelCardsTest  /> </Col>
          <Col> <AdminPanelCardsTest /> </Col>
        </Row>
        <Row>
          <Col> <AdminPanelCardsTest  /> </Col>
          <Col> <AdminPanelCardsTest /> </Col>
        </Row>
        <Row>
          <Col> <AdminPanelCardsTest  /> </Col>
          <Col> <AdminPanelCardsTest /> </Col>
        </Row>
        <Row>
          <Col> <AdminPanelCardsTest  /> </Col>
          <Col> <AdminPanelCardsTest /> </Col>
        </Row> */}

        <AdminPanelCards/>
{/* 
        <Button variant="primary" size="lg" >
            Submit quiz
          </Button> */}

        
              
            
      </Container>
    </>
  );
}

export default AdminPanel;

// const cors = require('cors')

// app.use(cors())
// const question = req.body.question;
// const optionA = req.body.optionA;
// const optionB = req.body.optionB;
// const optionC = req.body.optionC;
// const optionD = req.body.optionD;
// const correctOption = req.body.correctOption;
// const secondCorrectOption = req.body.secondCorrectOption;
// const difficultyLevel = req.body.difficultyLevel;

// const values = req.body.values
