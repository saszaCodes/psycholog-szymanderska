import "../styles.css";
import { Image, Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

export default function DesktopTitleScreen() {
  return (
    <div className="d-none d-md-block DesktopTitleScreenWrapper">
      <Image
        className="DesktopTitleScreenImg shadow"
        style={{ objectFit: "cover" }}
        src="https://i2.wp.com/szymanderska.pl/wp-content/uploads/2017/11/glowne-127.jpg?w=1932"
      />
      <div className="fixed-bottom ">
        <Navbar
          variant="light"
          className="CustomMenuShadow CustomMenuBackground"
        >
          <Container className="">
            <Nav className="">
              <Nav.Link href="/sas-therapy#sas-therapy">Terapia SAS</Nav.Link>
              <Nav.Link href="/about-me#about-me">O mnie</Nav.Link>
              <NavDropdown title="Oferta" drop="up">
                <NavDropdown.Item href="/offer#offer-psychotherapy">
                  Psychoterapia
                </NavDropdown.Item>
                <NavDropdown.Item href="/offer#offer-system">
                  Ustawienia systemowe
                </NavDropdown.Item>
                <NavDropdown.Item href="/offer#offer-for-parents">
                  Psycholog dla rodziców
                </NavDropdown.Item>
                <NavDropdown.Item href="/offer#offer-couples-therapy">
                  Terapia par
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact#contact">Kontakt</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
