import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Container, Col, Row, Image } from "react-bootstrap";
import "../../styles.css";
import contactImage from "../../assets/kontakt-psycholog.png"

export default function Contact() {
  const location = useLocation();
  const contactRef = useRef();

  useEffect(() => {
    switch (location.hash) {
      case "#contact":
        contactRef.current.scrollIntoView();
        break;
      default:
        console.log("Unhandled hash");
    }
  }, [location]);

  return (
    <Container className="pt-4 pb-md-5 mb-md-5">
      <Col xs={10} md={9} className="m-auto">
        <Row>
          <Col xs={12} md={9}>
            <h1 ref={contactRef} className="mb-4">
              Kontakt
            </h1>

            <p>
              <b>Adres:</b> I. Krasickiego 45C, lokal 8, Warszawa
              <br />
              <b>Email:</b> psycholog@szymanderska.pl
              <br />
              <b>Telefon:</b> +48 507 004 445
            </p>
          </Col>
          <Col xs={4} md={2} className="m-auto d-none d-md-block">
            <Image
              className="w-100 float-right"
              src={contactImage}
            />
          </Col>
        </Row>
        <h5 className="my-2">Jak do mnie dojechać?</h5>
        <p>
          <b>Metro:</b> stacja Racławicka lub Wierzbno, około 10 min piechotą od
          każdej z nich.
          <br />
          <b>Tramwaj:</b> 4, 10, 14, 18, 35 – przystanek Malczewskiego.
          <br />
          <b>Autobus:</b> 222 – przystanek Malczewskiego; 172, 141 – przystanek
          Krasickiego; 174 – przystanek Polskie Radio.
          <br />
        </p>
        <p>
          <b>Parking:</b> dla klientów przeznaczone jest miejsce na podjeździe
          przed bramą po prawej stronie – proszę nie sugerować się napisem
          “zakaz parkowania”.
        </p>
        <p>
          Dom, w którym znajduje się gabinet, jest oddalony od ulicy,{" "}
          <b>stoi w drugim szeregu</b>, należy wejść (wjechać na parking) w{" "}
          <b>przejście pomiędzy domami z numerami 43 i 45</b>. Przy ulicy, na
          ogrodzeniu wzdłuż podjazdu, widoczna jest tabliczka gabinetu – TERAPIA
          SAS.
        </p>
      </Col>
    </Container>
  );
}
