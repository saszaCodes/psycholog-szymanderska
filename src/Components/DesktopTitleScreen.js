import "../styles.css";
import { Image, Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import mainImg from "../assets/glowne.jpg";

export default function DesktopTitleScreen() {
  return (
    <div className="d-none d-md-block DesktopTitleScreenWrapper">
      <Image
        className="DesktopTitleScreenImg shadow"
        style={{ objectFit: "cover" }}
        src={mainImg}
      />
      <div className="fixed-bottom ">
        <Navbar
          variant="light"
          className="CustomMenuShadow CustomMenuBackground"
        >
          <Container className="">
            <Nav className="">
              <Nav.Link>
                <Link to="/sas-therapy#sas-therapy">Terapia SAS</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about-me#about-me">O mnie</Link>
              </Nav.Link>
              <NavDropdown title="Oferta" drop="up">
                <NavDropdown.Item>
                  <Link to="/offer#offer-psychotherapy">
                    Psychoterapia
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/offer#offer-system">
                    Ustawienia systemowe
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/offer#offer-for-parents">
                    Psycholog dla rodziców
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/offer#offer-couples-therapy">
                    Terapia par
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="/contact#contact">Kontakt</Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
