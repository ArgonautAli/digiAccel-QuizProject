import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Admin from "./Admin";
import User from "./User";
import "./App.css";

function App() {
  return (
    <>
      <Row className="Row h-100" style={{ height: "100vh" }}>
        <Col className="admin " style={{ height: "100vh" }}>
          <Admin />
        </Col>
        <Col className="user " style={{ height: "100vh" }}>
          <User />
        </Col>
      </Row>
    </>
  );
}

export default App;
