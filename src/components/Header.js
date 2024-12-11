import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <header className="main-header">
      <Navbar expand="lg">
          <Container >
            <Navbar.Brand href="#work">
              Kristin Erken - Artist
            </Navbar.Brand>
              {/* Mobile Toggle */}
              {/* <Navbar.Toggle
                aria-controls="menu-nav"
              /> */}
              {/* Top Menu */}
              <Navbar
                id="menu-nav"
                className="navbar-collapse justify-content-end"
              >
                <ul className="navbar-nav mx-auto">
                  <li>
                    <a className="nav-link" href="#work">
                      <span>Work</span>
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#skill">
                      <span>About</span>
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#contactus">
                      <span>Contact</span>
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="https://www.instagram.com/kristin.erken/" target='_blank'>
                      <span className='icon' style={{fontSize: 24 + 'px'}}><i className='fab fa-instagram'></i></span>
                    </a>
                  </li>
                </ul>
              </Navbar>
          </Container>
        </Navbar>
    </header>
  );
};
export default Header;
