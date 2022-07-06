import { useState, useEffect } from "react";
import { Card, Button, Form, Row, Col, Container, Modal } from "react-bootstrap";
import Axios from 'axios'




function AdminPanelCards() {

  const [gotData, setGotData] = useState(true)

  const [savedId, setSavedId] = useState(null)




  const [ques1, setQues1] = useState(null);
  const [ques2, setQues2] = useState(null);
  const [ques3, setQues3] = useState(null);
  const [ques4, setQues4] = useState(null);
  const [ques5, setQues5] = useState(null);
  const [ques6, setQues6] = useState(null);
  const [ques7, setQues7] = useState(null);
  const [ques8, setQues8] = useState(null);
  const [ques9, setQues9] = useState(null);
  const [ques10, setQues10] = useState(null);


  const [diff1, setDiff1] = useState(0);
  const [diff2, setDiff2] = useState(0);
  const [diff3, setDiff3] = useState(0);
  const [diff4, setDiff4] = useState(0);
  const [diff5, setDiff5] = useState(0);
  const [diff6, setDiff6] = useState(0);
  const [diff7, setDiff7] = useState(0);
  const [diff8, setDiff8] = useState(0);
  const [diff9, setDiff9] = useState(0);
  const [diff10, setDiff10] = useState(0);

  const [optA1, setOptA1] = useState(null);
  const [optA2, setOptA2] = useState(null);
  const [optA3, setOptA3] = useState(null);
  const [optA4, setOptA4] = useState(null);
  const [optA5, setOptA5] = useState(null);
  const [optA6, setOptA6] = useState(null);
  const [optA7, setOptA7] = useState(null);
  const [optA8, setOptA8] = useState(null);
  const [optA9, setOptA9] = useState(null);
  const [optA10, setOptA10] = useState(null);


  const [optB1, setOptB1] = useState(null);
  const [optB2, setOptB2] = useState(null);
  const [optB3, setOptB3] = useState(null);
  const [optB4, setOptB4] = useState(null);
  const [optB5, setOptB5] = useState(null);
  const [optB6, setOptB6] = useState(null);
  const [optB7, setOptB7] = useState(null);
  const [optB8, setOptB8] = useState(null);
  const [optB9, setOptB9] = useState(null);
  const [optB10, setOptB10] = useState(null);
  
  const [optC1, setOptC1] = useState(null);
  const [optC2, setOptC2] = useState(null);
  const [optC3, setOptC3] = useState(null);
  const [optC4, setOptC4] = useState(null);
  const [optC5, setOptC5] = useState(null);
  const [optC6, setOptC6] = useState(null);
  const [optC7, setOptC7] = useState(null);
  const [optC8, setOptC8] = useState(null);
  const [optC9, setOptC9] = useState(null);
  const [optC10, setOptC10] = useState(null);

  const [optD1, setOptD1] = useState(null);
  const [optD2, setOptD2] = useState(null);
  const [optD3, setOptD3] = useState(null);
  const [optD4, setOptD4] = useState(null);
  const [optD5, setOptD5] = useState(null);
  const [optD6, setOptD6] = useState(null);
  const [optD7, setOptD7] = useState(null);
  const [optD8, setOptD8] = useState(null);
  const [optD9, setOptD9] = useState(null);
  const [optD10, setOptD10] = useState(null);

  const [corr11, setCorr11] = useState(null);
  const [corr12, setCorr12] = useState(null);
  const [corr13, setCorr13] = useState(null);
  const [corr14, setCorr14] = useState(null);
  const [corr15, setCorr15] = useState(null);
  const [corr16, setCorr16] = useState(null);
  const [corr17, setCorr17] = useState(null);
  const [corr18, setCorr18] = useState(null);
  const [corr19, setCorr19] = useState(null);
  const [corr110, setCorr110] = useState(null);

  const [corr21, setCorr21] = useState(null);
  const [corr22, setCorr22] = useState(null);
  const [corr23, setCorr23] = useState(null);
  const [corr24, setCorr24] = useState(null);
  const [corr25, setCorr25] = useState(null);
  const [corr26, setCorr26] = useState(null);
  const [corr27, setCorr27] = useState(null);
  const [corr28, setCorr28] = useState(null);
  const [corr29, setCorr29] = useState(null);
  const [corr210, setCorr210] = useState(null);

  // function quesVal(event) {
  //   setQues1(event.target.value);
  //   // setQues2(event.target.value);
  //   setQues3(event.target.value);
  //   setQues4(event.target.value);
  //   setQues5(event.target.value);
  //   setQues6(event.target.value);
  //   setQues7(event.target.value);
  //   setQues8(event.target.value);
  //   setQues9(event.target.value);
  //   setQues10(event.target.value);
  // }

  // function diffVal(event) {
  //   setDiff1(event.target.value);
  //   setDiff2(event.target.value);
  //   setDiff3(event.target.value);
  //   setDiff4(event.target.value);
  //   setDiff5(event.target.value);
  //   setDiff6(event.target.value);
  //   setDiff7(event.target.value);
  //   setDiff8(event.target.value);
  //   setDiff9(event.target.value);
  //   setDiff10(event.target.value);
  // }

  // function valOptA(event) {
  //   setOptA1(event.target.value);
  //   setOptA2(event.target.value);
  //   setOptA3(event.target.value);
  //   setOptA4(event.target.value);
  //   setOptA5(event.target.value);
  //   setOptA6(event.target.value);
  //   setOptA7(event.target.value);
  //   setOptA8(event.target.value);
  //   setOptA9(event.target.value);
  //   setOptA10(event.target.value);
  // }
  // function valOptB(event) {
  //   setOptB1(event.target.value);
  //   setOptB2(event.target.value);
  //   setOptB3(event.target.value);
  //   setOptB4(event.target.value);
  //   setOptB5(event.target.value);
  //   setOptB6(event.target.value);
  //   setOptB7(event.target.value);
  //   setOptB8(event.target.value);
  //   setOptB9(event.target.value);
  //   setOptB10(event.target.value);
  // }
  // function valOptC(event) {
  //   setOptC1(event.target.value);
  //   setOptC2(event.target.value);
  //   setOptC3(event.target.value);
  //   setOptC4(event.target.value);
  //   setOptC5(event.target.value);
  //   setOptC6(event.target.value);
  //   setOptC7(event.target.value);
  //   setOptC8(event.target.value);
  //   setOptC9(event.target.value);
  //   setOptC10(event.target.value);
  // }
  // function valOptD(event) {
  //   setOptD1(event.target.value);
  //   setOptD2(event.target.value);
  //   setOptD3(event.target.value);
  //   setOptD4(event.target.value);
  //   setOptD5(event.target.value);
  //   setOptD6(event.target.value);
  //   setOptD7(event.target.value);
  //   setOptD8(event.target.value);
  //   setOptD9(event.target.value);
  //   setOptD10(event.target.value);
  // }

  // function corrVal1(event) {
  //   setCorr11(event.target.value);
  //   setCorr12(event.target.value);
  //   setCorr13(event.target.value);
  //   setCorr14(event.target.value);
  //   setCorr15(event.target.value);
  //   setCorr16(event.target.value);
  //   setCorr17(event.target.value);
  //   setCorr18(event.target.value);
  //   setCorr19(event.target.value);
  //   setCorr110(event.target.value);
  // }
  // function corrVal2(event) {
  //   setCorr21(event.target.value);
  //   setCorr21(event.target.value);
  //   setCorr21(event.target.value);
  //   setCorr21(event.target.value);
  //   setCorr21(event.target.value);
  //   setCorr21(event.target.value);
  //   setCorr21(event.target.value);
  //   setCorr21(event.target.value);
  //   setCorr21(event.target.value);
  //   setCorr21(event.target.value);
  // }

  const addQuiz = () => {
    Axios.post("https://digiaccel-alihaiderkhan.herokuapp.com/insert", {quizDat: [
      {
      question: ques1,
      optionA: optA1,
      optionB: optB1,
      optionC: optC1,
      optionD: optD1,
      correctOption: corr11,
      secondCorrectOption: corr21,
      difficultyLevel: diff1,
    },
    {
      question: ques2,
      optionA: optA2,
      optionB: optB2,
      optionC: optC2,
      optionD: optD2,
      correctOption: corr12,
      secondCorrectOption: corr22,
      difficultyLevel: diff2,
    },
    {
      question: ques3,
      optionA: optA3,
      optionB: optB3,
      optionC: optC3,
      optionD: optD3,
      correctOption: corr13,
      secondCorrectOption: corr23,
      difficultyLevel: diff3,
    },
    {
      question: ques4,
      optionA: optA4,
      optionB: optB4,
      optionC: optC4,
      optionD: optD4,
      correctOption: corr14,
      secondCorrectOption: corr24,
      difficultyLevel: diff4,
    },
    {
      question: ques5,
      optionA: optA5,
      optionB: optB5,
      optionC: optC5,
      optionD: optD5,
      correctOption: corr15,
      secondCorrectOption: corr25,
      difficultyLevel: diff5,
    },
    {
      question: ques6,
      optionA: optA6,
      optionB: optB6,
      optionC: optC6,
      optionD: optD6,
      correctOption: corr16,
      secondCorrectOption: corr26,
      difficultyLevel: diff6,
    },
    {
      question: ques7,
      optionA: optA7,
      optionB: optB7,
      optionC: optC7,
      optionD: optD7,
      correctOption: corr17,
      secondCorrectOption: corr27,
      difficultyLevel: diff7,
    },
    {
      question: ques8,
      optionA: optA8,
      optionB: optB8,
      optionC: optC8,
      optionD: optD8,
      correctOption: corr18,
      secondCorrectOption: corr28,
      difficultyLevel: diff8,
    },
    {
      question: ques9,
      optionA: optA9,
      optionB: optB9,
      optionC: optC9,
      optionD: optD9,
      correctOption: corr19,
      secondCorrectOption: corr29,
      difficultyLevel: diff9,
    },
    {
      question: ques10,
      optionA: optA10,
      optionB: optB10,
      optionC: optC10,
      optionD: optD10,
      correctOption: corr110,
      secondCorrectOption: corr210,
      difficultyLevel: diff10},
  
  ]});
  
  Axios.get('https://digiaccel-alihaiderkhan.herokuapp.com//read').then((response)=>{
    console.log(response.data.slice(-1)[0]._id)
    var justGotId = response.data.slice(-1)[0]._id
    setGotData(true)
    alert("Quiz Saved Succesfully! Save task id: " + savedId )
    setSavedId(justGotId)
  })

 

    
  };
  const handleClose = () => setGotData(false);

  return (
    <>
      <Container>
        <Row>
          <Col>

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
                        onChange={event => setQues1(event.target.value)}
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
                      onChange={event => setDiff1(event.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Card.Text>Enter options below</Card.Text>
                <Form>
                  <Row className="m-2">
                    <Col>
                      <Form.Control placeholder="A Option" onChange={event => setOptA1(event.target.value)} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="B Option" onChange={event => setOptB1(event.target.value)} />
                    </Col>
                  </Row>
                  <Row className="m-2">
                    <Col>
                      <Form.Control placeholder="C Option" onChange={event => setOptC1(event.target.value)} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="D Option" onChange={event => setOptD1(event.target.value)} />
                    </Col>
                  </Row>
                </Form>

                <Card.Text>
                  Enter correct answer(s) below (There must be at least one
                  correct answer)
                </Card.Text>

                <Form>
                  <Row className="m-2">
                    <Col>
                      <Form.Control
                        placeholder="Correct answer"
                        onChange={event => setCorr11(event.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        placeholder="Correct answer"
                        onChange={event => setCorr21(event.target.value)}
                      />
                    </Col>
                  </Row>
                </Form>
              </Card.Body>

              <Card.Footer>
                <small style={{ backgroundColor: "#B1A99F" }}></small>
              </Card.Footer>
            </Card>
          </Col>

          <Col>
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
                        onChange={event => setQues2(event.target.value)}
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
                      onChange={event => setDiff2(event.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Card.Text>Enter options below</Card.Text>
                <Form>
                  <Row className="m-2">
                    <Col>
                      <Form.Control placeholder="A Option" onChange={event => setOptA2(event.target.value)} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="B Option" onChange={event => setOptB2(event.target.value)} />
                    </Col>
                  </Row>
                  <Row className="m-2">
                    <Col>
                      <Form.Control placeholder="C Option" onChange={event => setOptC2(event.target.value)} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="D Option" onChange={event => setOptD2(event.target.value)} />
                    </Col>
                  </Row>
                </Form>

                <Card.Text>
                  Enter correct answer(s) below (There must be at least one
                  correct answer)
                </Card.Text>

                <Form>
                  <Row className="m-2">
                    <Col>
                      <Form.Control
                        placeholder="Correct answer"
                        onChange={event => setCorr12(event.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        placeholder="Correct answer"
                        onChange={event => setCorr22(event.target.value)}
                      />
                    </Col>
                  </Row>
                </Form>
              </Card.Body>

              <Card.Footer>
                <small style={{ backgroundColor: "#B1A99F" }}></small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
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
                        onChange={event => setQues3(event.target.value)}
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
                      onChange={event => setDiff3(event.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Card.Text>Enter options below</Card.Text>
                <Form>
                  <Row className="m-2">
                    <Col>
                      <Form.Control placeholder="A Option" onChange={event => setOptA3(event.target.value)} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="B Option" onChange={event => setOptB3(event.target.value)} />
                    </Col>
                  </Row>
                  <Row className="m-2">
                    <Col>
                      <Form.Control placeholder="C Option" onChange={event => setOptC3(event.target.value)} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="D Option" onChange={event => setOptD3(event.target.value)} />
                    </Col>
                  </Row>
                </Form>

                <Card.Text>
                  Enter correct answer(s) below (There must be at least one
                  correct answer)
                </Card.Text>

                <Form>
                  <Row className="m-2">
                    <Col>
                      <Form.Control
                        placeholder="Correct answer"
                        onChange={event => setCorr13(event.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        placeholder="Correct answer"
                        onChange={event => setCorr23(event.target.value)}
                      />
                    </Col>
                  </Row>
                </Form>
              </Card.Body>

              <Card.Footer>
                <small style={{ backgroundColor: "#B1A99F" }}></small>
              </Card.Footer>
            </Card>
          </Col>

          <Col>
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
                        onChange={event => setQues4(event.target.value)}
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
                      onChange={event => setDiff4(event.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Card.Text>Enter options below</Card.Text>
                <Form>
                  <Row className="m-2">
                    <Col>
                      <Form.Control placeholder="A Option" onChange={event => setOptA4(event.target.value)} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="B Option" onChange={event => setOptB4(event.target.value)} />
                    </Col>
                  </Row>
                  <Row className="m-2">
                    <Col>
                      <Form.Control placeholder="C Option" onChange={event => setOptC4(event.target.value)} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="D Option" onChange={event => setOptD4(event.target.value)} />
                    </Col>
                  </Row>
                </Form>

                <Card.Text>
                  Enter correct answer(s) below (There must be at least one
                  correct answer)
                </Card.Text>

                <Form>
                  <Row className="m-2">
                    <Col>
                      <Form.Control
                        placeholder="Correct answer"
                        onChange={event => setCorr14(event.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        placeholder="Correct answer"
                        onChange={event => setCorr24(event.target.value)}
                      />
                    </Col>
                  </Row>
                </Form>
              </Card.Body>

              <Card.Footer>
                <small style={{ backgroundColor: "#B1A99F" }}></small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
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
                        onChange={event => setQues5(event.target.value)}
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
                      onChange={event => setDiff5(event.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Card.Text>Enter options below</Card.Text>
                <Form>
                  <Row className="m-2">
                    <Col>
                      <Form.Control placeholder="A Option" onChange={event => setOptA5(event.target.value)} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="B Option" onChange={event => setOptB5(event.target.value)} />
                    </Col>
                  </Row>
                  <Row className="m-2">
                    <Col>
                      <Form.Control placeholder="C Option" onChange={event => setOptC5(event.target.value)} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="D Option" onChange={event => setOptD5(event.target.value)} />
                    </Col>
                  </Row>
                </Form>

                <Card.Text>
                  Enter correct answer(s) below (There must be at least one
                  correct answer)
                </Card.Text>

                <Form>
                  <Row className="m-2">
                    <Col>
                      <Form.Control
                        placeholder="Correct answer"
                        onChange={event => setCorr15(event.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        placeholder="Correct answer"
                        onChange={event => setCorr25(event.target.value)}
                      />
                    </Col>
                  </Row>
                </Form>
              </Card.Body>

              <Card.Footer>
                <small style={{ backgroundColor: "#B1A99F" }}></small>
              </Card.Footer>
            </Card>
          </Col>

          <Col>
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
                        onChange={event => setQues6(event.target.value)}
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
                      onChange={event => setDiff6(event.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Card.Text>Enter options below</Card.Text>
                <Form>
                  <Row className="m-2">
                    <Col>
                      <Form.Control placeholder="A Option" onChange={event => setOptA6(event.target.value)} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="B Option" onChange={event => setOptB6(event.target.value)} />
                    </Col>
                  </Row>
                  <Row className="m-2">
                    <Col>
                      <Form.Control placeholder="C Option" onChange={event => setOptC6(event.target.value)} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="D Option" onChange={event => setOptD6(event.target.value)} />
                    </Col>
                  </Row>
                </Form>

                <Card.Text>
                  Enter correct answer(s) below (There must be at least one
                  correct answer)
                </Card.Text>

                <Form>
                  <Row className="m-2">
                    <Col>
                      <Form.Control
                        placeholder="Correct answer"
                        onChange={event => setCorr16(event.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        placeholder="Correct answer"
                        onChange={event => setCorr26(event.target.value)}
                      />
                    </Col>
                  </Row>
                </Form>
              </Card.Body>

              <Card.Footer>
                <small style={{ backgroundColor: "#B1A99F" }}></small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
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
                        onChange={event => setQues7(event.target.value)}
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
                      onChange={event => setDiff7(event.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Card.Text>Enter options below</Card.Text>
                <Form>
                  <Row className="m-2">
                    <Col>
                      <Form.Control placeholder="A Option" onChange={event => setOptA7(event.target.value)} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="B Option" onChange={event => setOptB7(event.target.value)} />
                    </Col>
                  </Row>
                  <Row className="m-2">
                    <Col>
                      <Form.Control placeholder="C Option" onChange={event => setOptC7(event.target.value)} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="D Option" onChange={event => setOptD7(event.target.value)} />
                    </Col>
                  </Row>
                </Form>

                <Card.Text>
                  Enter correct answer(s) below (There must be at least one
                  correct answer)
                </Card.Text>

                <Form>
                  <Row className="m-2">
                    <Col>
                      <Form.Control
                        placeholder="Correct answer"
                        onChange={event => setCorr17(event.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        placeholder="Correct answer"
                        onChange={event => setCorr27(event.target.value)}
                      />
                    </Col>
                  </Row>
                </Form>
              </Card.Body>

              <Card.Footer>
                <small style={{ backgroundColor: "#B1A99F" }}></small>
              </Card.Footer>
            </Card>
          </Col>

          <Col>
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
                        onChange={event => setQues8(event.target.value)}
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
                      onChange={event => setDiff8(event.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Card.Text>Enter options below</Card.Text>
                <Form>
                  <Row className="m-2">
                    <Col>
                      <Form.Control placeholder="A Option" onChange={event => setOptA8(event.target.value)} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="B Option" onChange={event => setOptB8(event.target.value)} />
                    </Col>
                  </Row>
                  <Row className="m-2">
                    <Col>
                      <Form.Control placeholder="C Option" onChange={event => setOptC8(event.target.value)} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="D Option" onChange={event => setOptD8(event.target.value)} />
                    </Col>
                  </Row>
                </Form>

                <Card.Text>
                  Enter correct answer(s) below (There must be at least one
                  correct answer)
                </Card.Text>

                <Form>
                  <Row className="m-2">
                    <Col>
                      <Form.Control
                        placeholder="Correct answer"
                        onChange={event => setCorr18(event.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        placeholder="Correct answer"
                        onChange={event => setCorr28(event.target.value)}
                      />
                    </Col>
                  </Row>
                </Form>
              </Card.Body>

              <Card.Footer>
                <small style={{ backgroundColor: "#B1A99F" }}></small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
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
                        onChange={event => setQues9(event.target.value)}
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
                      onChange={event => setDiff9(event.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Card.Text>Enter options below</Card.Text>
                <Form>
                  <Row className="m-2">
                    <Col>
                      <Form.Control placeholder="A Option" onChange={event => setOptA9(event.target.value)} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="B Option" onChange={event => setOptB9(event.target.value)} />
                    </Col>
                  </Row>
                  <Row className="m-2">
                    <Col>
                      <Form.Control placeholder="C Option" onChange={event => setOptC9(event.target.value)} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="D Option" onChange={event => setOptD9(event.target.value)} />
                    </Col>
                  </Row>
                </Form>

                <Card.Text>
                  Enter correct answer(s) below (There must be at least one
                  correct answer)
                </Card.Text>

                <Form>
                  <Row className="m-2">
                    <Col>
                      <Form.Control
                        placeholder="Correct answer"
                        onChange={event => setCorr19(event.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        placeholder="Correct answer"
                        onChange={event => setCorr29(event.target.value)}
                      />
                    </Col>
                  </Row>
                </Form>
              </Card.Body>

              <Card.Footer>
                <small style={{ backgroundColor: "#B1A99F" }}></small>
              </Card.Footer>
            </Card>
          </Col>

          <Col>
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
                        onChange={event => setQues10(event.target.value)}
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
                      onChange={event => setDiff10(event.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Card.Text>Enter options below</Card.Text>
                <Form>
                  <Row className="m-2">
                    <Col>
                      <Form.Control placeholder="A Option" onChange={event => setOptA10(event.target.value)} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="B Option" onChange={event => setOptB10(event.target.value)} />
                    </Col>
                  </Row>
                  <Row className="m-2">
                    <Col>
                      <Form.Control placeholder="C Option" onChange={event => setOptC10(event.target.value)} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="D Option" onChange={event => setOptD10(event.target.value)} />
                    </Col>
                  </Row>
                </Form>

                <Card.Text>
                  Enter correct answer(s) below (There must be at least one
                  correct answer)
                </Card.Text>

                <Form>
                  <Row className="m-2">
                    <Col>
                      <Form.Control
                        placeholder="Correct answer"
                        onChange={event => setCorr110(event.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        placeholder="Correct answer"
                        onChange={event => setCorr210(event.target.value)}
                      />
                    </Col>
                  </Row>
                </Form>
              </Card.Body>

              <Card.Footer>
                <small style={{ backgroundColor: "#B1A99F" }}></small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>

        <div className="d-grid gap-2 mt-3 mb-4">
          <Button variant="primary" size="lg" onClick={addQuiz}>
            Submit quiz
          </Button>
        </div>
      </Container>

      {gotData?<Modal show={gotData} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Quiz Submitted!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Quiz Saved Succesfully! Save task id:  {savedId} !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>:null}
    </>
  );
}

export default AdminPanelCards;
