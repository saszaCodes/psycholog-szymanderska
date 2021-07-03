import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Container, Col, ListGroup } from "react-bootstrap";
import "../../styles.css";
import InlineImage from "../Misc/InlineImage";
import offerPsychotherapyImage from "../../assets/psychoterapia.png";
import offerSystemImage from "../../assets/terapia-systemowa.png";
import offerCouplesTherapyImage from "../../assets/terapia-par.png";
import offerForParentsImage from "../../assets/dla-rodzicow.png";

export default function Offer() {
  const location = useLocation();
  const offerRef = useRef();
  const offerPsychotherapyRef = useRef();
  const offerSystemRef = useRef();
  const offerForParentsRef = useRef();
  const offerCouplesTherapyRef = useRef();

  useEffect(() => {
    // scrollIntoView(true): true is a value of a boolean argument alignToTop, which fixes issues with mobile version not scrolling properlny on hash change
    switch (location.hash) {
      case "#offer":
        offerRef.current.scrollIntoView(true);
        break;
      case "#offer-psychotherapy":
        offerPsychotherapyRef.current.scrollIntoView(true);
        break;
      case "#offer-system":
        offerSystemRef.current.scrollIntoView(true);
        break;
      case "#offer-for-parents":
        offerForParentsRef.current.scrollIntoView(true);
        break;
      case "#offer-couples-therapy":
        offerCouplesTherapyRef.current.scrollIntoView(true);
        break;
      default:
        console.log("Unhandled hash");
    }
  }, [location]);

  return (
    <Container className="pt-4 pb-md-5 mb-md-5">
      <Col xs={10} md={9} className="m-auto">
        <h1 ref={offerRef} className="mb-4">
          Oferta
        </h1>
        {/* LISTGROUP ONLY ON MOBILE */}
        <ListGroup className="d-block d-md-none mb-4">
          <a href="#offer-psychotherapy">
            <ListGroup.Item variant="light">Psychoterapia</ListGroup.Item>
          </a>
          <a href="#offer-system">
            <ListGroup.Item variant="light">
              Ustawienia systemowe
            </ListGroup.Item>
          </a>
          <a href="#offer-for-parents">
            <ListGroup.Item variant="light">
              Psycholog dla rodziców
            </ListGroup.Item>
          </a>
          <a href="#offer-couples-therapy">
            <ListGroup.Item variant="light">Terapia par</ListGroup.Item>
          </a>
        </ListGroup>
        <InlineImage
          reference={offerPsychotherapyRef}
          imgSource={offerPsychotherapyImage}
          titleText={<h5>Psychoterapia</h5>}
        />
        <p>
          <b>PSYCHOTERAPIA</b> jest pojęciem bardzo szerokim. Według „Słownika
          Psychologii” A.S. Rebera to „zastosowanie każdej metody, która ma
          łagodzące lub lecznicze oddziaływanie na wszelkie zaburzenia
          psychiczne, emocjonalne lub zachowania”.Te zaburzenia to, najogólniej
          ujmując, poczucie dyskomfortu z własnym życiem i samym sobą,
          niezadowolenie z dokonywanych wyborów, różnego rodzaju lęki i obawy,
          skutki stresu, depresja itd., itp. Inaczej mówiąc, to niedostatek
          szczęścia, spokoju i radości, to brak miłości do siebie i świata.{" "}
          <b>
            Celem psychoterapii jest doprowadzenie do zdrowia, czyli harmonii na
            poziomie psychiki.
          </b>
        </p>
        <p>
          <b>PSYCHOTERAPIA TRANSPERSONALNA</b> zajmuje się pełnym spektrum
          dolegliwości, którymi zajmują się psychoterapeuci innych modalności
          (szkół) lecz jej ostateczny cel jest znacznie szerszy niż w
          tradycyjnie pojmowanej psychoterapii. Poza doprowadzeniem do
          przystosowania społecznego i dobrego samopoczucia na poziomie ego,{" "}
          <b>
            psychoterapia transpersonalna daje szansę na „codzienne
            doświadczanie takiego stanu, który – według różnych tradycji – jest
            zwany wyzwoleniem, oświeceniem, indywiduacją, pewnością lub
            poznaniem
          </b>{" "}
          (gnozą)”* a który, dla uproszczenia, określam mianem szczęścia i
          miłości. I to właśnie stanowi ostateczny cel prowadzonej przeze mnie
          psychoterapii, aby moi klienci przekonali się, że{" "}
          <b>
            możliwe jest codzienne funkcjonowanie w stanie szczęścia i miłości
          </b>{" "}
          i aby takie funkcjonowanie mogło stać się ich udziałem.
        </p>
        <h6>W czym psychoterapia pomaga:</h6>
        <ul>
          <li>Jeśli w Twoim życiu brakuje spokoju i harmonii.</li>
          <li>Jesteś nieszczęśliwa, nieszczęśliwy.</li>
          <li>Masz niską samoocenę.</li>
          <li>Masz problemy w kontaktach z ludźmi.</li>
          <li>Cierpisz na depresję lub obawiasz się, że na nią cierpisz.</li>
          <li>Przeżyłeś trudną sytuację życiową.</li>
          <li>Jest Ci w życiu smutno i źle.</li>
          <li>Masz poczucie osamotnienia.</li>
          <li>Jesteś zdenerwowany, zestresowany.</li>
          <li>
            Cierpisz na nerwicę, lęki, zaburzenia nastroju, zaburzenia
            odżywiania.
          </li>
          <li>Chcesz wyjść z dołka.</li>
          <li>Chcesz, aby twoje życie stało się lepsze.</li>
          <li>Chcesz lepiej poznać siebie.</li>
          <li>Szukasz drogi rozwoju osobistego.</li>
          <li>
            Jesteś rodzicem, masz kłopoty związane z wychowaniem lub zachowaniem
            Twojego dziecka.
          </li>
        </ul>
        <p>
          Każdy z tych powodów jest właściwy aby poszukiwać pomocy u
          psychoterapeuty. Prowadzona przeze mnie Terapia SAS pozwala wybrnąć
          nawet z najtrudniejszych sytuacji. Prowadzę indywidualną terapię
          krótko- i długoterminową polegającą na regularnych spotkaniach
          zazwyczaj raz w tygodniu. Zapraszam również na indywidualne sesje{" "}
          <a style={{ textDecoration: "underline" }} href="#offer-system">
            ustawień systemowych
          </a>
          .
        </p>
        <h6>Jak pracuje psychoterapeuta</h6>
        <p>
          Za początki psychoterapii uważa się wprowadzoną przez Zygmunta Freuda
          metodę psychoanalizy, czyli <b>leczenia przez rozmowę</b>. Od tamtych
          czasów zmieniło się wiele i niewiele. Niewiele – ponieważ rozmowa
          nadal jest podstawowym narzędziem pracy terapeuty. Wiele – ponieważ
          sposób jej prowadzenia różni się od tego, który stosował Freud, a
          ilość i różnorodność stosowanych przez terapeutów metod wychodzących
          poza rozmowę jest nieporównywalna z czasami twórcy psychoanalizy. To,
          jakie metody stosuje terapeuta, w jaki sposób podchodzi do problemów,
          zależy od rodzaju terapii w jakiej się szkolił i zgodnie z którą
          pracuje.
        </p>
        <h6>Psycholog, psychoterapeuta, psychiatra - czym się różnią</h6>
        <p>
          <b>Psychologiem</b> jest osoba, która ukończyła studia psychologiczne.
          Samo ukończenie wydziału psychologii na najbardziej nawet renomowanej
          uczelni nie daje wystarczających kompetencji do pracy w charakterze
          psychoterapeuty. Aby być <b>psychoterapeutą</b> należy ukończyć
          szkolenie w wybranej szkole, lub szkołach psychoterapii w zależności
          od sposobu w jaki terapeuta chce pracować, jaki rodzaj podejścia do
          klienta jest mu bliski, którą ze współczesnych dróg psychologii
          wybiera (są 4 główne nurty psychoterapeutyczne: behawioralno-
          poznawczy, psychodynamiczny, humanistyczny i transpersonalny, a w ich
          ramach wiele szkół i metod psychoterapeutycznych).
        </p>
        <p>
          Aby być <b>psychiatrą</b> trzeba ukończyć właściwą specjalizację
          lekarską. Psychiatra jest lekarzem, ma prawo wypisywania recept,
          zajmuje się chorobami psychicznymi. Zdarzają się psychiatrzy, którzy
          są również terapeutami, ale jest to wtedy dodatkowa umiejętność.
        </p>
        <InlineImage
          reference={offerSystemRef}
          imgSource={offerSystemImage}
          titleText={<h5>Ustawienia systemowe</h5>}
        />
        <p>
          Ustawienia systemowe to metoda terapeutyczna opracowana przez
          niemieckiego terapeutę Berta Hellingera. Dostrzegł on i docenił
          <b>
            głębokie powiązania łączące nas z członkami naszej rodziny, a nawet
            szerzej rozumianym “systemem”
          </b>
          . Poza rodziną, należą do niego osoby ważne w naszym życiu i w życiu
          naszych przodków, z którymi połączeni jesteśmy istotnymi zdarzeniami
          losowymi. Najbardziej destabilizujące dla systemu i obciążające jego
          członków jest “wykluczenie” zatrzymujące “przepływ miłości”.
        </p>
        <p>
          <b>
            “Wykluczenie” pojawia się wtedy, gdy zdarza się jakaś trudna,
            traumatyczna sytuacja wywołująca tak silne i niewygodne emocje, że
            łatwiej jest o niej nie mówić
          </b>
          , zapomnieć, udawać, że jej nie było. System “wie”, że to się zdarzyło
          a towarzyszące zdarzeniu emocje gdzieś muszą się objawić. I objawiają
          się u któregoś z członków systemu, który może nawet nie znać
          zdarzenia, w wyniku, którego one powstały.Tym bardziej nie rozumie on
          swoich odczuć, zachowań, sytuacji, które wynikają z “niesionych” przez
          niego, nieświadomie, cudzych emocji.
        </p>
        <h6>Na czym polega ich działanie</h6>
        <p>
          <b>
            Metoda zaproponowana przez Hellingera pozwala odnaleźć źródła emocji
            i uporządkować je.
          </b>{" "}
          W tym podejściu, każdy uczestnik systemu bierze na siebie swoją i
          tylko swoją część odpowiedzialności za sytuację. To wpływa
          porządkująco na cały system, powoduje, że nie ma już odrzuconych,
          “wykluczonych” bo każdy uczciwie bierze na siebie co do niego należy i
          nie obciąża tym kolejnych krewnych. Gdy tak się dzieje, nie ma nikogo
          do kogo inni mogą mieć o cokolwiek żal, a miłość może przepływać
          swobodnie.{" "}
          <b>
            Efektem dla konkretnej osoby jest uwolnienie od niechcianych emocji
          </b>
          , zrozumienie (i idąca za nim możliwość wyeliminowania) trudności
          życiowych i otwierająca się perspektywa bycia szczęśliwym w swoim
          życiu.
        </p>
        <h6>Jak w praktyce wygląda ich stosowanie</h6>
        <p>
          Podczas sesji indywidualnej terapeuta pracuje używając figurek lub
          kartek papieru, które obrazują poszczególnych członków systemu lub
          pojęcia abstrakcyjne, jeśli pojawiają się one w polu pracy. Podczas
          sesji warsztatowych, w członków systemu wcielają się uczestnicy
          warsztatu.
        </p>
        <p>
          Często jest tak, że już podczas jednego ustawienia udaje się dotrzeć
          do przyczyny zgłaszanego problemu i odnaleźć rozwiązanie. Ustawienia
          same w sobie stanowią technikę terapeutyczną, mogą także służyć jako
          wsparcie dla procesu terapeutycznego osób będących w terapii własnej –
          niezależnie od rodzaju tej terapii.
        </p>
        <p>
          W moim gabinecie prowadzę osobne indywidualne sesje ustawień oraz
          wykorzystuję tę metodę jako uzupełnienie systematycznej terapii.
        </p>
        <InlineImage
          reference={offerForParentsRef}
          imgSource={offerForParentsImage}
          titleText={<h5>Psycholog dla rodziców</h5>}
        />
        <h6>Jak możesz pomóc swojemu dziecku</h6>
        <p>
          Rodzicielstwo to stan ducha, a także pełnoetatowy zawód z wysokimi
          wymaganiami. Rodzice mają w swoim ręku klucze do zachowań dzieci.
          Często najprościej i najefektywniej można zmienić trudne zachowania
          dzieci, pokazując rodzicom, jak tych kluczy używać.
        </p>
        <p>
          Moja pomoc skierowana jest na podnoszenie kompetencji w trudnym dziele
          bycia rodzicem. Rodzice czujący się pewnie w swojej roli mogą w pełni
          cieszyć się życiem i dziećmi.
        </p>
        <p>
          Jesteś rodzicem, kochasz swoje dziecko. Czasem jednak czujesz się
          bezradnie wobec wyzwań jakie stawia przed tobą jego wychowywanie.
          Czasem nie potrafisz zapanować nad nerwami, a potem masz poczucie winy
          za swoje zachowanie. Czasem niepokoi cię zachowanie twojego dziecka i
          nie wiesz czy to z nim jest “coś nie tak” czy może ty popełniasz
          jakieś błędy.{" "}
          <b>
            Moja pomoc skierowana jest na podnoszenie kompetencji
            rodzicielskich. Rodzic czujący się pewnie w swojej roli potrafi
            dawać to czego dziecko najbardziej potrzebuje – miłość i poczucie
            bezpieczeństwa.
          </b>
        </p>
        <p>
          Wychowywanie dzieci to zadanie, które daje radość, ale bywa też
          wyzwaniem wywołującym silne reakcje emocjonalne, czasem trudne i
          nieprzyjemne.{" "}
          <b>
            Tak jak w każdej dziedzinie życia, w rodzicielstwie także można się
            pogubić.
          </b>{" "}
          Ważne jest aby, będąc rodzicem, rozumieć z czego wynikają zachowania
          dzieci, co one znaczą i jak na nie reagować, aby osiągnąć zamierzony
          efekt.
        </p>
        <h6>Kiedy warto zwrócić się po pomoc?</h6>
        <ul>
          <li>
            Kiedy nie wiesz jak masz reagować na zachowania swojego dziecka,
            czujesz się bezradnie,
          </li>
          <li>
            kiedy nie potrafisz zapanować nad nerwami w reakcji na zachowania
            dziecka,
          </li>
          <li>
            kiedy w relacji z dzieckiem więcej jest chwil nerwowych i
            nieprzyjemnych niż miłych i radosnych,
          </li>
          <li>
            kiedy nie rozumiesz dlaczego twoje dziecko zachowuje się tak a nie
            inaczej,
          </li>
          <li>
            kiedy martwisz się, czy jesteś wystarczająco dobrym rodzicem, czy
            nie popełniasz błędów, które mogą w niekorzystny sposób odbić się na
            dziecku,
          </li>
          <li>kiedy masz poczucie braku więzi z dzieckiem,</li>
          <li>
            kiedy czujesz niechęć do własnego dziecka, nie akceptujesz dla jego
            zachowań,
          </li>
          <li>
            kiedy odczuwasz emocjonalne odrzucenie przez dziecko (zwłaszcza
            nastoletnie),
          </li>
          <li>
            kiedy czujesz zmęczenie rodzicielstwem i brak towarzyszącej mu
            radości.
          </li>
        </ul>
        <h6>Jak pracuję z rodzicami</h6>
        <p>
          Spotkania z rodzicami (jednym lub obojgiem) to raczej coaching,
          doradztwo, nie terapia. Prowadzę je zgodnie z zasadami Terapii SAS.
          <b>
            Rodzice dzięki odnalezieniu wewnętrznego szacunku, akceptacji i siły
            poszerzają i utrwalają swoje rodzicielskie kompetencje.
          </b>
        </p>
        <p>
          Ilość i częstotliwość spotkań ustalana jest ze względu na indywidualne
          potrzeby. Praca może obejmować wszystkie stosowane przeze mnie
          techniki psychoterapeutyczne, w tym ustawienia systemowe.
        </p>
        <InlineImage
          reference={offerCouplesTherapyRef}
          imgSource={offerCouplesTherapyImage}
          titleText={<h5>Terapia par</h5>}
        />
        <p>
          <b>
            Związek to coś więcej niż całość – to całość, której częściami są
            również całości.
          </b>{" "}
          A każda całość to coś więcej niż tylko suma jej części. Czyli związek
          to <b>całe Ja, całe Ty i jeszcze całe My</b>. Łatwo się w tym pogubić.
          Na dodatek, aby dobrze funkcjonować, każda z tych całości wymaga
          dbałości i uwagi. Kiedy zadbać o Ja a kiedy poświęcić się My? Kiedy Ty
          jest ważniejsze od Ja?{" "}
          <b>
            Terapia pomaga rozplątać to, co splątane. Dostrzec każdy z elementów
            oddzielnie i jako połączoną ze sobą całość.
          </b>{" "}
          Jej celem jest poprawa, czy wręcz umożliwienie prawidłowej komunikacji
          między partnerami. Odszukanie źródeł kryzysu oraz znalezienie
          rozwiązań umożliwiających jego przezwyciężenie.
        </p>
        <p>
          Terapia par to forma pomocy skierowana do przeżywających kryzys
          małżeństw i par pozostających w związkach nieformalnych (hetero- i
          homoseksualnych).
        </p>
        <h6>Jak pracuję z parami</h6>
        <p>
          Podobnie jak w innych obszarach pracy, także i tu wykorzystuję
          różnorodne narzędzia, w tym{" "}
          <a href="#offer-system" style={{ textDecoration: "underline" }}>
            ustawienia systemowe
          </a>
          . Podstawę pracy stanowią zasady terapii SAS czyli{" "}
          <b>
            odnalezienie, w oparciu o wewnętrzny szacunek, akceptację i siłę,
            zrozumienia samych siebie
          </b>{" "}
          i tego jakiego rodzaju wartością oraz czym jest związek z drugą osobą.
        </p>
        <p>
          Spotkania trwają 1,5 h, odbywają się regularnie, zgodnie z
          harmonogramem ustalonym na pierwszym spotkaniu.
        </p>
      </Col>
    </Container>
  );
}
