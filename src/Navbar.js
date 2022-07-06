import { Navbar, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navibar() {

return(
  <Navbar expand="lg" className='navi m-1'>
    <Container>
      <Link to="/"><Navbar.Brand href="#home">Main Page</Navbar.Brand></Link>
    </Container>
  </Navbar>
  )
}

export default Navibar
