import { Container } from "react-bootstrap";
import Navibar from "./Navbar";
import UserPanelCarousel from "./UserPanelCarousel";

function UserPanel(){
    return(
        <>
        <Navibar/>
        <Container>

            <UserPanelCarousel/>

        </Container>        
        </>
    )
}

export default UserPanel;