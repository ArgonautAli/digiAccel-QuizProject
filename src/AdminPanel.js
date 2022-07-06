import Navibar from "./Navbar";
import AdminPanelCards from "./AdminPanelCards";
import { Container, Row, Col, CardGroup, Button } from "react-bootstrap";

import { func } from "prop-types";

function AdminPanel() {


  return (
    <>
      <Navibar />
      <Container className="apPage ">
        <h1>Build your own quiz</h1>
        <h5>
          Generate your own unique link of quiz by typing your own MCQ with up
          to 2 correct answers and difficulty level from 1-10!
        </h5>
     

        <AdminPanelCards/>


        
              
            
      </Container>
    </>
  );
}

export default AdminPanel;

