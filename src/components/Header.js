import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <header className="main-header">
      <Navbar expand="lg">
          <Container >
            <Navbar.Brand href="#">
              Kristin Erken - Artist
            </Navbar.Brand>
              {/* Mobile Toggle */}
              <Navbar.Toggle
                aria-controls="menu-nav"
              />
              {/* Top Menu */}
              <Navbar.Collapse
                id="menu-nav"
                className="navbar-collapse justify-content-end"
              >
                <ul className="navbar-nav mx-auto">
                  <li>
                    <a className="nav-link active" href="#home">
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#services">
                      <span>Services</span>
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#skill">
                      <span>Skills</span>
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#work">
                      <span>Portfolio</span>
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#contactus">
                      <span>Contact</span>
                    </a>
                  </li>
                </ul>
              </Navbar.Collapse>
          </Container>
        </Navbar>
    </header>
  );
};
export default Header;
