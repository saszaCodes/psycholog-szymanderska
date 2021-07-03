import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Container, Col, Image } from "react-bootstrap";
import "../../styles.css";
import aboutMeImage from "../../assets/psycholog-szymanderska-photo-small.png";

export default function AboutMe() {
  const location = useLocation();
  const aboutMeRef = useRef();

  useEffect(() => {
    switch (location.hash) {
      case "#about-me":
        // scrollIntoView(true): true is a value of a boolean argument alignToTop, which fixes issues with mobile version not scrolling properlny on hash change
        aboutMeRef.current.scrollIntoView(true);
        break;
      default:
        console.log("Unhandled hash");
    }
  }, [location]);

  return (
    <Container className="pt-4 pb-md-5 mb-md-5">
      <Col xs={10} md={9} className="m-auto">
        <h1 ref={aboutMeRef} className="mb-4">
          O mnie
        </h1>
        <Image
          src={aboutMeImage}
          className="fluid shadow rounded-circle float-md-right mw-100 ml-4 mb-4 border border-light"
        />
        <p>
          Nazywam się Joanna Szymanderska. Jestem psychologiem i terapeutą. Moje
          podejście terapeutyczne – Terapia SAS – bazuje na założeniu, że{" "}
          <b>
            każdy nosi w sobie rozwiązanie swojej trudnej sytuacji i wie co jest
            dla niego najlepsze, najwłaściwsze
          </b>
          . Jednak ta wiedza skrywa się za utartymi schematami, za przekonaniami
          co wolno, a czego nie należy, za lękiem, przez który samemu trudno
          przebrnąć. Terapia pomaga odnaleźć drogę do rozwiązania, pomaga
          odnaleźć spokój, szczęście i miłość.
        </p>

        <p>
          <b>
            Ucząc Szacunku, Akceptacji i Siły (Terapia SAS) prowadzę do
            poukładania relacji ze światem i z samym sobą
          </b>
          , do odczuwania spokoju, harmonii, radości i miłości. Miłość to
          przeciwieństwo lęku, stresu, depresji, braku poczucia bezpieczeństwa,
          to kontakt z potężną energią dającą nam siłę aby żyć i życiem się
          cieszyć. To bycie szczęśliwym.
        </p>
        <p>
          Metody, którymi się posługuję, stanowią zintegrowany system opierający
          się na pojęciu pola. Pole to nasza świadomość i nieświadomość –
          odbicie naszej psychicznej rzeczywistości w otaczającym świecie, w
          spotykających nas zdarzeniach, to wpływ przekazów rodowych,
          kulturowych, inkarnacyjnych na nasze psychologiczne teraz. Stosowane
          przeze mnie narzędzia wywodzą się z klasycznych nurtów psychoterapii –
          psychoterapii psychodynamicznej i poznawczej – oraz bardziej
          nowatorskich podejść, jak ustawienia hellingerowskie, mindellowska
          praca ze śnieniem oraz “karmienie demonów” wg T. Allione. Takie
          połączenie, różnych technik w jednej, wewnętrznie spójnej metodzie,
          jaką jest Terapia SAS, pozwala na szerokie spektrum oddziaływania przy
          jednoczesnym uszanowaniu procesu klienta, czyli w zgodzie z jego
          indywidualnymi potrzebami i możliwościami.
        </p>
        <p>
          Ukończyłam <b>Wydział Psychologii Uniwersytetu Warszawskiego</b>.
          Podczas studiów specjalizowałam się w psychoterapii oraz w psychologii
          klinicznej dziecka. Umiejętności psychoterapeutyczne pogłębiłam
          podczas studiów w dwuletnim{" "}
          <b>Studium Psychologii Zorientowanej na Proces</b> (Instytut
          Psychologii Procesu) poszerzonym przez dodatkowe seminaria prowadzone
          przez nauczycieli POP z kraju i zagranicy. Ukończyłam również{" "}
          <b>
            dwuletni zaawansowany kurs ustawień systemowych metodą Berta
            Hellingera
          </b>
          . Brałam udział w seminarium Salvadora Minuchina „Systemowa terapia
          rodzin”. Integracja wiedzy i umiejętności zgromadzonych w różnych
          szkołach terapii, podczas pracy z klientami i na drodze własnego
          rozwoju zaowocowała powstaniem{" "}
          <b>autorskiej koncepcji terapii – Terapii SAS</b>.
        </p>
        <p>
          Aby zapewnić profesjonalny poziom usług oraz zagwarantować wysokie
          normy etyczne w pracy stosuję{" "}
          <b>zasady Kodeksu Etycznego Polskiej Federacji Psychoterapii</b>.
        </p>
      </Col>
    </Container>
  );
}
