import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Container, Col } from "react-bootstrap";
import "../../styles.css";
import InlineImage from "../Misc/InlineImage";
import respectImage from "../../assets/szacunek.png";
import acceptanceImage from "../../assets/akceptacja.png";
import strengthImage from "../../assets/sila.png";
import loveImage from "../../assets/milosc.png";

export default function SasTherapy() {
  const location = useLocation();
  const sasTherapyRef = useRef();

  useEffect(() => {
    switch (location.hash) {
      case "#sas-therapy":
        sasTherapyRef.current.scrollIntoView();
        break;
      default:
        console.log("Unhandled hash");
    }
  }, [location]);

  return (
    <Container className="pt-4 pb-md-5 mb-md-5">
      <Col xs={11} md={9} className="m-auto">
        <h1 ref={sasTherapyRef} className="mb-4">
          Terapia SAS
        </h1>
        <p>
          Celem Terapii SAS jest{" "}
          <b>
            pomoc w odkryciu harmonii pozwalającej żyć w zgodzie ze sobą, swoim
            życiem i światem
          </b>
          . To ona stanowi podstawę do odczuwania spokoju, miłości i szczęścia.
          Drogą do tego celu są trzy kroki, trzy umiejętności, których uczy
          Terapia SAS – Szacunek, Akceptacja i Siła. Terapeuta SAS widzi
          człowieka i jego problemy w szerokim kontekście jedności na poziomach:
          ciała, psychiki i ducha. Dostrzega, że wszelka zmiana dokonująca się
          na którymkolwiek z tych poziomów, powoduje zmiany we wszystkich innych
          obszarach.{" "}
          <b>
            Aby zmiany były możliwe, konieczne jest poszerzanie pola
            świadomości, czyli odnalezienie nieświadomych treści, które kierują
            naszymi emocjami i zachowaniami.
          </b>{" "}
          Ich rozpoznanie i zrozumienie pozwala efektywniej kierować własnym
          życiem.
        </p>
        <h5 className="my-2">Podstawy</h5>
        <p>
          <b>Terapia SAS jest holistycznym podejściem</b> postrzegającym
          człowieka z jednej strony, jako duchowo-psychiczno-materialną całość,
          z drugiej jako część wszechświata, z którym tworzy nierozerwalną i
          wzajemnie na siebie oddziałującą strukturę we wszystkich trzech
          wspomnianych wymiarach, a może także na poziomach, których jeszcze nie
          potrafimy odkryć.
          <br />
          Koncepcja Terapii SAS{" "}
          <b>wywodzi się z psychologii transpersonalnej</b> dostrzegającej w
          człowieku, poza psychiką, także aspekty duchowy i transcendentny.
          Czyli wszystko to, co pozwala poszerzać poczucie własnej tożsamości
          poza poziom indywidualny aby osiągnąć odczucie pełni, do którego, jako
          ludzie, świadomie czy nieświadomie, dążymy. Za twórców podejścia
          transpersonalnego uważani są m.in. <b>Carl Gustav Jung</b>,{" "}
          <b>Abraham Maslow</b>, <b>Stanislav Grof</b> czy <b>Ken Wilber</b>.
        </p>
        <h5 className="my-2">Droga</h5>
        <p>
          Trzy filary, na których opiera się Terapia SAS to Szacunek, Akceptacja
          i Siła.
        </p>
        <InlineImage
          imgSource={respectImage}
          titleText={<h6>Szacunek</h6>}
        />
        <p>
          <b>Szacunek</b> w Terapii SAS ma dwa znaczenia:
          <br />
          <br />
          Pierwsze mówi o <b>obdarzaniu szacunkiem siebie i innych nie za to “jaki
          jestem”, lecz dlatego, “że jestem”</b>. Czasownik “jestem” opisuje to co w
          nas najbardziej podstawowe, uniwersalne i wspólne. To synonim dla
          “żyję” “istnieję”. Istnienie to niepodlegająca krytyce ani ocenie
          wartość, która jest wspólna i jednakowa dla wszystkich. Jej
          uszanowanie oznacza dostrzeżenie jej w sobie i innych jako równie
          dobrej i ważnej, a to z kolei prowadzi do uwolnienia się spod presji
          oceniania i krytyki.
          <br />
          <br />
          Drugi aspekt szacunku to <b>uznanie odrębności drugiego człowieka i jego
          prawa do własnych wyborów i decyzji</b>. Czyli zgoda na to, że jesteśmy
          różni. Każdy z nas ma prawo być taki, jaki jest i jakim chce być. Ma
          prawo do decydowania o swoim istnieniu. Każdy ma prawo do dokonywania
          własnych wyborów, do brania za nie odpowiedzialności i do ponoszenia
          ich konsekwencji. Tak, to nie pomyłka. Branie odpowiedzialności i
          ponoszenie konsekwencji jest prawem i przywilejem a nie dopustem
          bożym. Dostrzeżenie, zrozumienie i uszanowanie wartości jaką jest
          odrębność i odpowiedzialność za nią, w równym stopniu u siebie jak u
          innych, prowadzi do osiągnięcia wewnętrznej wolności i niezależności.
        </p>
        <InlineImage
          imgSource={acceptanceImage}
          titleText={<h6>Akceptacja</h6>}
        />
        <p>
          <b>Akceptacja</b> to droga do zmiany prowadząca poprzez zgodę na świat
          takim, jakim on jest w danym momencie. Poprzez <b>zgodę na siebie takim,
          jakim jesteś w danym momencie</b>. Przy maksymalnym zredukowaniu ilości
          filtrów zniekształcających oglądany obraz. Poprzez uczciwe zobaczenie
          tego co ci się podoba i nie podoba. <b>To, co ci się w tobie nie podoba
          możesz zmienić, ale tylko jeśli to dostrzegasz.</b> Nie możesz zmienić
          czegoś przed czym uciekasz, czy udajesz, że nie istnieje, „zamykając na
          to oczy”, stosując filtry, dlatego zgoda na świat taki, jaki w danej
          chwili widzisz, jest podstawą dokonania zmiany. Zmiana jest tym
          skuteczniejsza i bardziej udana, im lepiej znasz to, co chcesz
          zmienić. Terapia SAS uczy dokonywania zmian opartych na akceptacji.
        </p>
        <InlineImage
          imgSource={strengthImage}
          titleText={<h6>Siła</h6>}
        />
        <p>
          <b>Siła</b> jest konsekwencją przyjęcia Szacunku i Akceptacji w wyżej
          opisanych znaczeniach. Przejawia się w wewnętrznym poczuciu
          bezpieczeństwa, pełnym zaufaniu do siebie samego i w poczuciu własnej
          wartości.
        </p>
        <InlineImage
          imgSource={loveImage}
          titleText={<h6>I dodatkowo - miłość</h6>}
        />
        <p>
          Wewnętrzne zintegrowanie tak rozumianych: Szacunku, Akceptacji i Siły
          prowadzi do odczuwania wewnętrznej miłości. <b>Wewnętrzna miłość to
          przeciwieństwo lęku, stresu, niepewności, depresji.</b> To odnalezienie
          siebie samego i własnej drogi przez życie. To poczucie własnej
          wartości, poczucie bezpieczeństwa, sympatia do otaczającego świata i
          siebie w nim.Terapia SAS prowadzi do osiągnięcia wewnętrznej harmonii,
          do radosnego obcowania z samym sobą i rozpościerającą się wokół
          rzeczywistością.
        </p>
        <h5 className="my-2">Sesje</h5>
        <p>
          <b>Podstawowym narzędziem psychoterapeuty jest rozmowa.</b> W Terapii SAS
          korzystam także z innych możliwości jakie daje płynne połączenie
          różnych podejść. Są to m.in. <b>wizualizacje</b>, <b>trans</b>, <b>techniki
          projekcyjne</b>, <b>wchodzenie w doświadczanie</b>, <b>ustawienia systemowe</b>.
          <br />
          Czas trwania terapii może być różny, w zależności od zgłaszanych
          problemów i chęci pogłębiania pracy nad sobą klienta. Terapia
          krótkoterminowa to kilka do kilkunastu spotkań. Terapia długoterminowa
          to powyżej kilkunastu spotkań.
        </p>
      </Col>
    </Container>
  );
}
