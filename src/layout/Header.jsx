

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/signup">
            Sign Up
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>


    // <header>
    //   <nav>
    //     <ul>
    //       <li> <Link to="/" />
    //         Home
    //       </li>
    //       <li> <Link to="/signup" />
    //         Sign Up
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  )
}
