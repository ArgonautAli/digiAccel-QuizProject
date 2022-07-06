import { useState } from "react";
import { Card, Button, Form, Row, Col, Container } from "react-bootstrap";
import Axios from 'axios'


function AdminPanelCardsTest(props) {
  const [ques, setQues] = useState(null);
  const [diff, setDiff] = useState(0);

  const [optA, setOptA] = useState(null);
  const [optB, setOptB] = useState(null);
  const [optC, setOptC] = useState(null);
  const [optD, setOptD] = useState(null);

  const [corr1, setCorr1] = useState(null);
  const [corr2, setCorr2] = useState(null);

  function quesVal(event) {
    setQues(event.target.value);
  }

  function diffVal(event) {
    setDiff(event.target.value);
  }

  function valOptA(event) {
    setOptA(event.target.value);
  }
  function valOptB(event) {
    setOptB(event.target.value);
  }
  function valOptC(event) {
    setOptC(event.target.value);
  }
  function valOptD(event) {
    setOptD(event.target.value);
  }

  function corrVal1(event) {
    setCorr1(event.target.value);
  }
  function corrVal2(event) {
    setCorr2(event.target.value);
  }

  //   const values = {
  //     question: ques,
  //     optionA: optA,
  //     optionB: optB,
  //     optionC: optC,
  //     optionD: optD,
  //     correctOption: corr1,
  //     secondCorrectOption: corr2,
  //     difficultyLevel: diff,
  //   };
  

  function getVal() {
    console.log( {
        question: ques,
        optionA: optA,
        optionB: optB,
        optionC: optC,
        optionD: optD,
        correctOption: corr1,
        secondCorrectOption: corr2,
        difficultyLevel: diff,
      });
    Axios.post("http://localhost:3001/insert", {
      question: ques,
      optionA: optA,
      optionB: optB,
      optionC: optC,
      optionD: optD,
      correctOption: corr1,
      secondCorrectOption: corr2,
      difficultyLevel: diff,
    });
  }

  return (
    <>
      <Card className="apCard mt-4 m-1">
        <Card.Body>
          <Card.Title>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalQuestion"
            >
              <Form.Label style={{ backgroundColor: "#ffa168" }}>
                Question
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  placeholder="Enter question here"
                  onChange={quesVal}
                />
              </Col>
            </Form.Group>
          </Card.Title>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalDifficulty"
          >
            <Form.Label>Difficulty level</Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                placeholder="select from 1 to 10"
                min="1"
                max="10"
                onChange={diffVal}
              />
            </Col>
          </Form.Group>
          <Card.Text>Enter options below</Card.Text>
          <Form>
            <Row className="m-2">
              <Col>
                <Form.Control placeholder="A Option" onChange={valOptA} />
              </Col>
              <Col>
                <Form.Control placeholder="B Option" onChange={valOptB} />
              </Col>
            </Row>
            <Row className="m-2">
              <Col>
                <Form.Control placeholder="C Option" onChange={valOptC} />
              </Col>
              <Col>
                <Form.Control placeholder="D Option" onChange={valOptD} />
              </Col>
            </Row>
          </Form>

          <Card.Text>
            Enter correct answer(s) below (There must be at least one correct
            answer)
          </Card.Text>

          <Form>
            <Row className="m-2">
              <Col>
                <Form.Control
                  placeholder="Correct answer"
                  onChange={corrVal1}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Correct answer"
                  onChange={corrVal2}
                />
              </Col>
            </Row>
          </Form>
          <Button variant="primary" size="sm" onClick={getVal}>
            Done
          </Button>
        </Card.Body>

        <Card.Footer>
          <small style={{ backgroundColor: "#B1A99F" }}></small>
        </Card.Footer>
      </Card>
    </>
  );
}

export default AdminPanelCardsTest;
