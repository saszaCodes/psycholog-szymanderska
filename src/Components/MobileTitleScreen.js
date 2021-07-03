import "../styles.css";
import { Col, Image, Row, Card, Container } from "react-bootstrap";
import sasTherapyImg from "../assets/moja-metoda-sas.png";
import contactImg from "../assets/kontakt-psycholog.png";
import offerImg from "../assets/oferta-terapia.png";
import aboutMeImg from "../assets/o-mnie-psycholog.png";
import upArrowImg from "../assets/up-arrow.png";
import mainImg from "../assets/glowne.jpg";

export default function MobileTitleScreen() {
  return (
    <div className="MobileTitleScreenWrapper d-block d-md-none">
      <a href="#top">
        <Image className="shadow bg-light MobileUpArrow" src={upArrowImg} />
      </a>
      <Col xs={12} className="p-0">
        <Image className="p-0 m-0 mh-100 w-100 shadow" src={mainImg} />

        <Container className="py-5">
          <div className="MobileMenuBackground" />
          <Row xs={2} className="mx-auto align-items-center">
            <Col>
              <a href="/sas-therapy#sas-therapy">
                <Card className="border-0 bg-transparent">
                  <Card.Img
                    src={sasTherapyImg}
                    variant="top"
                    className="p-3 MobileMenuImageBackground"
                  />
                  <Card.Title className="text-center MobileMenuText">
                    O terapii SAS
                  </Card.Title>
                </Card>
              </a>
            </Col>
            <Col>
              <a href="/about-me#about-me">
                <Card className="border-0 bg-transparent">
                  <Card.Img
                    src={aboutMeImg}
                    variant="top"
                    className="p-3 MobileMenuImageBackground"
                  />
                  <Card.Title className="text-center MobileMenuText">
                    O mnie
                  </Card.Title>
                </Card>
              </a>
            </Col>
          </Row>
          <Row xs={2} className="mx-auto mt-3 align-items-center">
            <Col>
              <a href="/offer#offer">
                <Card className="border-0 bg-transparent">
                  <Card.Img
                    src={offerImg}
                    variant="top"
                    className="p-3 MobileMenuImageBackground"
                  />
                  <Card.Title className="text-center MobileMenuText">
                    Oferta
                  </Card.Title>
                </Card>
              </a>
            </Col>
            <Col>
              <a href="/contact#contact">
                <Card className="border-0 bg-transparent">
                  <Card.Img
                    src={contactImg}
                    variant="top"
                    className="p-3 MobileMenuImageBackground"
                  />
                  <Card.Title className="text-center MobileMenuText">
                    Kontakt
                  </Card.Title>
                </Card>
              </a>
            </Col>
          </Row>
        </Container>
      </Col>
    </div>
  );
}
