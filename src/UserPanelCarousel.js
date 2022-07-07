import { Card, Button, Form, Container, Row, Col, Badge, Modal } from "react-bootstrap";
import Axios from "axios";

import { useState } from "react";

function UserPanelCarousel() {
  const [testId, setTestId] = useState(null);
  const [displayData, setDisplayData] = useState([]);
  const [testBeg, setTestBeg] = useState(false)

  const [displayQues, setDisplayQues] = useState(null)
  const [displayDiff, setDisplayDiff] = useState(0)
  const [displayOptA, setDisplayOptA] = useState(null)
  const [displayOptB, setDisplayOptB] = useState(null)
  const [displayOptC, setDisplayOptC] = useState(null)
  const [displayOptD, setDisplayOptD] = useState(null)

  const [displayCorrOpt1, setDisplayCorrOpt1] = useState(null)
  const [displayCorrOpt2, setDisplayCorrOpt2] = useState(null)

  const [inputAns1, setInputAns1] = useState(null)
  const [inputAns2, setInputAns2] = useState(null)
  const [correctInp, setCorrectInp] = useState(false)
  const [score, setScore] = useState(0)
  const [newDiff, setnewDiff] = useState(5)

  const [nextQues, setNextQues] = useState(false)

  const [endTest, setEndTest] = useState(false)

 
  

  function getTest() {
    
    console.log(testBeg)
    console.log(testId)
    Axios.get("https://digiaccel-alihaiderkhan.herokuapp.com/read").then((response) => {
      setTestBeg(true)
      console.log(response.data);
      setDisplayData(response.data);


      setDisplayQues(displayData.filter((obj) => obj._id == testId)[0].quizQuestions.filter((dif) => dif.difficultyLevel == newDiff)[0].question)
      setDisplayDiff(displayData.filter((obj) => obj._id == testId)[0].quizQuestions.filter((dif) => dif.difficultyLevel == newDiff)[0].difficultyLevel)

      setDisplayOptA(displayData.filter((obj) => obj._id == testId)[0].quizQuestions.filter((dif) => dif.difficultyLevel == newDiff)[0].optionA)
      setDisplayOptB(displayData.filter((obj) => obj._id == testId)[0].quizQuestions.filter((dif) => dif.difficultyLevel == newDiff)[0].optionB)
      setDisplayOptC(displayData.filter((obj) => obj._id == testId)[0].quizQuestions.filter((dif) => dif.difficultyLevel == newDiff)[0].optionC)
      setDisplayOptD(displayData.filter((obj) => obj._id == testId)[0].quizQuestions.filter((dif) => dif.difficultyLevel == newDiff)[0].optionD)

      setDisplayCorrOpt1(displayData.filter((obj) => obj._id == testId)[0].quizQuestions.filter((dif) => dif.difficultyLevel == newDiff)[0].correctOption)
      setDisplayCorrOpt2(displayData.filter((obj) => obj._id == testId)[0].quizQuestions.filter((dif) => dif.difficultyLevel == newDiff)[0].secondCorrectOption)

  
    });
  }

  function getInput(){
    console.log("check input")
    console.log(inputAns1)
    console.log(displayCorrOpt1)
    setNextQues(true)
    

    if(inputAns1 == displayCorrOpt1 && inputAns2 == displayCorrOpt2){
      console.log("correct ans input")
      setCorrectInp(true)
      setScore(score+1)
      setnewDiff(newDiff+1)

      }
     
    
    else if (inputAns1 !== displayCorrOpt1 || inputAns2 !== displayCorrOpt2){
      setCorrectInp(false)
      setScore(score-1)
      setnewDiff(newDiff-1)


    }

    const myInterval = setInterval(newQues,2000)

    function newQues(){
      
      setDisplayQues(displayData.filter((obj) => obj._id == testId)[0].quizQuestions.filter((dif) => dif.difficultyLevel == newDiff)[0].question)
      setDisplayDiff(displayData.filter((obj) => obj._id == testId)[0].quizQuestions.filter((dif) => dif.difficultyLevel == newDiff)[0].difficultyLevel)

      setDisplayOptA(displayData.filter((obj) => obj._id == testId)[0].quizQuestions.filter((dif) => dif.difficultyLevel == newDiff)[0].optionA)
      setDisplayOptB(displayData.filter((obj) => obj._id == testId)[0].quizQuestions.filter((dif) => dif.difficultyLevel == newDiff)[0].optionB)
      setDisplayOptC(displayData.filter((obj) => obj._id == testId)[0].quizQuestions.filter((dif) => dif.difficultyLevel == newDiff)[0].optionC)
      setDisplayOptD(displayData.filter((obj) => obj._id == testId)[0].quizQuestions.filter((dif) => dif.difficultyLevel == newDiff)[0].optionD)

      setDisplayCorrOpt1(displayData.filter((obj) => obj._id == testId)[0].quizQuestions.filter((dif) => dif.difficultyLevel == newDiff)[0].correctOption)
      setDisplayCorrOpt2(displayData.filter((obj) => obj._id == testId)[0].quizQuestions.filter((dif) => dif.difficultyLevel == newDiff)[0].secondCorrectOption)

      console.log("time for new ques")
      console.log(displayQues)
      setNextQues(false)



      clearInterval(myInterval);
        
    }

    if(score >= 10){
      setEndTest(true)
    } else if(score < 0 ){
      setEndTest(true)
    }

  }

  const handleClose = () => {
    setEndTest(false)

    setDisplayQues(null)
      setDisplayDiff(null)

      setDisplayOptA(null)
      setDisplayOptB(null)
      setDisplayOptC(null)
      setDisplayOptD(null)

      setDisplayCorrOpt1(null)
      setDisplayCorrOpt2(null)

      setScore(0)
      setnewDiff(5)
      setTestBeg(false)
  };

 


  return (
    <>
      <Row>
        <Container className="text-center d-flex justify-content-center">
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Enter Quiz ID</Card.Title>
                <Card.Text>
                  Enter the quiz id to start your quiz
                  
                  <small>(Try this ID: 62c5a7bbc88f184790058cc5)</small>
                  <Form.Control
                    type="email"
                    placeholder="Enter ID here"
                    onChange={(event) => setTestId(event.target.value)}
                  />
                </Card.Text>

                <Button variant="primary" onClick={getTest}>
                 Click Twice to Begin
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Container>

        {/* Question display card */}
{testBeg? <Card className="mt-4 uspCard">
          <Card.Body>
            <Card.Title>
              <Badge pill bg="primary">
  Your Score: {score}
  </Badge></Card.Title>
            <Card.Text>
              <h4>Question:</h4> <h5>{displayQues}</h5>
              <Badge pill bg="primary">
  Difficulty Level: {displayDiff}
  </Badge>
             
            </Card.Text>
            <Row>
              <Col>a. {displayOptA}</Col>
              <Col>b. {displayOptB}</Col>
            </Row>
            <Row>
              <Col>c. {displayOptC}</Col>
              <Col>d. {displayOptD}</Col>
            </Row>
            <Row className="mt-1">
              <Col>
              {!nextQues?<input placeholder="Enter correct value" onChange={(event)=> setInputAns1(event.target.value) }/>:<input placeholder={inputAns1} disabled /> }
              
              </Col>
              <Col>
              {!nextQues?<input placeholder="Enter correct value" onChange={(event)=> setInputAns2(event.target.value) }/>:<input placeholder={inputAns2} disabled /> }
              </Col>
            </Row>
            {!nextQues? <Button variant="primary" className="mt-2" onClick={getInput}>Next</Button>: <Button variant="primary" className="mt-2" disabled>Next</Button>}

            
          <div className="mt-2">
            {correctInp? <h5>Correct Answer</h5>: <h5>Incorrect Answer</h5>}
            </div>

          </Card.Body>
        </Card>: null}
        
      </Row>

      <Modal
        show={endTest}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Quiz Over</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your quiz is over, your final score is {score}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
    
  );
}

export default UserPanelCarousel;
