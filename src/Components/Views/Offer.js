import { useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, Col, ListGroup } from "react-bootstrap";
import "../../styles.css";
import InlineImage from "../Misc/InlineImage";
import offerPsychotherapyImage from "../../assets/psychoterapia.png"
import offerSystemImage from "../../assets/terapia-systemowa.png"
import offerCouplesTherapyImage from "../../assets/terapia-par.png"
import offerForParentsImage from "../../assets/dla-rodzicow.png"

export default function Offer() {
  const location = useLocation();
  const offerRef = useRef();
  const offerPsychotherapyRef = useRef();
  const offerSystemRef = useRef();
  const offerForParentsRef = useRef();
  const offerCouplesTherapyRef = useRef();

  useEffect(() => {
    switch (location.hash) {
      case "#offer":
        offerRef.current.scrollIntoView();
        break;
      case "#offer-psychotherapy":
        offerPsychotherapyRef.current.scrollIntoView();
        break;
      case "#offer-system":
        offerSystemRef.current.scrollIntoView();
        break;
      case "#offer-for-parents":
        offerForParentsRef.current.scrollIntoView();
        break;
      case "#offer-couples-therapy":
        offerCouplesTherapyRef.current.scrollIntoView();
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
          <Link to="#offer-psychotherapy">
            <ListGroup.Item variant="light">Psychoterapia</ListGroup.Item>
          </Link>
          <Link to="#offer-system">
            <ListGroup.Item variant="light">
              Ustawienia systemowe
            </ListGroup.Item>
          </Link>
          <Link to="#offer-for-parents">
            <ListGroup.Item variant="light">
              Psycholog dla rodzic??w
            </ListGroup.Item>
          </Link>
          <Link to="#offer-couples-therapy">
            <ListGroup.Item variant="light">Terapia par</ListGroup.Item>
          </Link>
        </ListGroup>
        <InlineImage
          reference={offerPsychotherapyRef}
          imgSource={offerPsychotherapyImage}
          titleText={<h5>Psychoterapia</h5>}
        />
        <p>
          <b>PSYCHOTERAPIA</b> jest poj??ciem bardzo szerokim. Wed??ug ???S??ownika
          Psychologii??? A.S. Rebera to ???zastosowanie ka??dej metody, kt??ra ma
          ??agodz??ce lub lecznicze oddzia??ywanie na wszelkie zaburzenia
          psychiczne, emocjonalne lub zachowania???.Te zaburzenia to, najog??lniej
          ujmuj??c, poczucie dyskomfortu z w??asnym ??yciem i samym sob??,
          niezadowolenie z dokonywanych wybor??w, r????nego rodzaju l??ki i obawy,
          skutki stresu, depresja itd., itp. Inaczej m??wi??c, to niedostatek
          szcz????cia, spokoju i rado??ci, to brak mi??o??ci do siebie i ??wiata.{" "}
          <b>
            Celem psychoterapii jest doprowadzenie do zdrowia, czyli harmonii na
            poziomie psychiki.
          </b>
        </p>
        <p>
          <b>PSYCHOTERAPIA TRANSPERSONALNA</b> zajmuje si?? pe??nym spektrum
          dolegliwo??ci, kt??rymi zajmuj?? si?? psychoterapeuci innych modalno??ci
          (szk????) lecz jej ostateczny cel jest znacznie szerszy ni?? w
          tradycyjnie pojmowanej psychoterapii. Poza doprowadzeniem do
          przystosowania spo??ecznego i dobrego samopoczucia na poziomie ego,{" "}
          <b>
            psychoterapia transpersonalna daje szans?? na ???codzienne
            do??wiadczanie takiego stanu, kt??ry ??? wed??ug r????nych tradycji ??? jest
            zwany wyzwoleniem, o??wieceniem, indywiduacj??, pewno??ci?? lub
            poznaniem
          </b>{" "}
          (gnoz??)???* a kt??ry, dla uproszczenia, okre??lam mianem szcz????cia i
          mi??o??ci. I to w??a??nie stanowi ostateczny cel prowadzonej przeze mnie
          psychoterapii, aby moi klienci przekonali si??, ??e{" "}
          <b>
            mo??liwe jest codzienne funkcjonowanie w stanie szcz????cia i mi??o??ci
          </b>{" "}
          i aby takie funkcjonowanie mog??o sta?? si?? ich udzia??em.
        </p>
        <h6>W czym psychoterapia pomaga:</h6>
        <ul>
          <li>Je??li w Twoim ??yciu brakuje spokoju i harmonii.</li>
          <li>Jeste?? nieszcz????liwa, nieszcz????liwy.</li>
          <li>Masz nisk?? samoocen??.</li>
          <li>Masz problemy w kontaktach z lud??mi.</li>
          <li>Cierpisz na depresj?? lub obawiasz si??, ??e na ni?? cierpisz.</li>
          <li>Prze??y??e?? trudn?? sytuacj?? ??yciow??.</li>
          <li>Jest Ci w ??yciu smutno i ??le.</li>
          <li>Masz poczucie osamotnienia.</li>
          <li>Jeste?? zdenerwowany, zestresowany.</li>
          <li>
            Cierpisz na nerwic??, l??ki, zaburzenia nastroju, zaburzenia
            od??ywiania.
          </li>
          <li>Chcesz wyj???? z do??ka.</li>
          <li>Chcesz, aby twoje ??ycie sta??o si?? lepsze.</li>
          <li>Chcesz lepiej pozna?? siebie.</li>
          <li>Szukasz drogi rozwoju osobistego.</li>
          <li>
            Jeste?? rodzicem, masz k??opoty zwi??zane z wychowaniem lub zachowaniem
            Twojego dziecka.
          </li>
        </ul>
        <p>
          Ka??dy z tych powod??w jest w??a??ciwy aby poszukiwa?? pomocy u
          psychoterapeuty. Prowadzona przeze mnie Terapia SAS pozwala wybrn????
          nawet z najtrudniejszych sytuacji. Prowadz?? indywidualn?? terapi??
          kr??tko- i d??ugoterminow?? polegaj??c?? na regularnych spotkaniach
          zazwyczaj raz w tygodniu. Zapraszam r??wnie?? na indywidualne sesje{" "}
          <Link style={{ textDecoration: "underline" }} href="#offer-system">
            ustawie?? systemowych
          </Link>
          .
        </p>
        <h6>Jak pracuje psychoterapeuta</h6>
        <p>
          Za pocz??tki psychoterapii uwa??a si?? wprowadzon?? przez Zygmunta Freuda
          metod?? psychoanalizy, czyli <b>leczenia przez rozmow??</b>. Od tamtych
          czas??w zmieni??o si?? wiele i niewiele. Niewiele ??? poniewa?? rozmowa
          nadal jest podstawowym narz??dziem pracy terapeuty. Wiele ??? poniewa??
          spos??b jej prowadzenia r????ni si?? od tego, kt??ry stosowa?? Freud, a
          ilo???? i r????norodno???? stosowanych przez terapeut??w metod wychodz??cych
          poza rozmow?? jest niepor??wnywalna z czasami tw??rcy psychoanalizy. To,
          jakie metody stosuje terapeuta, w jaki spos??b podchodzi do problem??w,
          zale??y od rodzaju terapii w jakiej si?? szkoli?? i zgodnie z kt??r??
          pracuje.
        </p>
        <h6>Psycholog, psychoterapeuta, psychiatra - czym si?? r????ni??</h6>
        <p>
          <b>Psychologiem</b> jest osoba, kt??ra uko??czy??a studia psychologiczne.
          Samo uko??czenie wydzia??u psychologii na najbardziej nawet renomowanej
          uczelni nie daje wystarczaj??cych kompetencji do pracy w charakterze
          psychoterapeuty. Aby by?? <b>psychoterapeut??</b> nale??y uko??czy??
          szkolenie w wybranej szkole, lub szko??ach psychoterapii w zale??no??ci
          od sposobu w jaki terapeuta chce pracowa??, jaki rodzaj podej??cia do
          klienta jest mu bliski, kt??r?? ze wsp????czesnych dr??g psychologii
          wybiera (s?? 4 g????wne nurty psychoterapeutyczne: behawioralno-
          poznawczy, psychodynamiczny, humanistyczny i transpersonalny, a w ich
          ramach wiele szk???? i metod psychoterapeutycznych).
        </p>
        <p>
          Aby by?? <b>psychiatr??</b> trzeba uko??czy?? w??a??ciw?? specjalizacj??
          lekarsk??. Psychiatra jest lekarzem, ma prawo wypisywania recept,
          zajmuje si?? chorobami psychicznymi. Zdarzaj?? si?? psychiatrzy, kt??rzy
          s?? r??wnie?? terapeutami, ale jest to wtedy dodatkowa umiej??tno????.
        </p>
        <InlineImage
          reference={offerSystemRef}
          imgSource={offerSystemImage}
          titleText={<h5>Ustawienia systemowe</h5>}
        />
        <p>
          Ustawienia systemowe to metoda terapeutyczna opracowana przez
          niemieckiego terapeut?? Berta Hellingera. Dostrzeg?? on i doceni??
          <b>
            g????bokie powi??zania ????cz??ce nas z cz??onkami naszej rodziny, a nawet
            szerzej rozumianym ???systemem???
          </b>
          . Poza rodzin??, nale???? do niego osoby wa??ne w naszym ??yciu i w ??yciu
          naszych przodk??w, z kt??rymi po????czeni jeste??my istotnymi zdarzeniami
          losowymi. Najbardziej destabilizuj??ce dla systemu i obci????aj??ce jego
          cz??onk??w jest ???wykluczenie??? zatrzymuj??ce ???przep??yw mi??o??ci???.
        </p>
        <p>
          <b>
            ???Wykluczenie??? pojawia si?? wtedy, gdy zdarza si?? jaka?? trudna,
            traumatyczna sytuacja wywo??uj??ca tak silne i niewygodne emocje, ??e
            ??atwiej jest o niej nie m??wi??
          </b>
          , zapomnie??, udawa??, ??e jej nie by??o. System ???wie???, ??e to si?? zdarzy??o
          a towarzysz??ce zdarzeniu emocje gdzie?? musz?? si?? objawi??. I objawiaj??
          si?? u kt??rego?? z cz??onk??w systemu, kt??ry mo??e nawet nie zna??
          zdarzenia, w wyniku, kt??rego one powsta??y.Tym bardziej nie rozumie on
          swoich odczu??, zachowa??, sytuacji, kt??re wynikaj?? z ???niesionych??? przez
          niego, nie??wiadomie, cudzych emocji.
        </p>
        <h6>Na czym polega ich dzia??anie</h6>
        <p>
          <b>
            Metoda zaproponowana przez Hellingera pozwala odnale???? ??r??d??a emocji
            i uporz??dkowa?? je.
          </b>{" "}
          W tym podej??ciu, ka??dy uczestnik systemu bierze na siebie swoj?? i
          tylko swoj?? cz?????? odpowiedzialno??ci za sytuacj??. To wp??ywa
          porz??dkuj??co na ca??y system, powoduje, ??e nie ma ju?? odrzuconych,
          ???wykluczonych??? bo ka??dy uczciwie bierze na siebie co do niego nale??y i
          nie obci????a tym kolejnych krewnych. Gdy tak si?? dzieje, nie ma nikogo
          do kogo inni mog?? mie?? o cokolwiek ??al, a mi??o???? mo??e przep??ywa??
          swobodnie. <b>Efektem dla konkretnej osoby jest uwolnienie od
          niechcianych emocji</b>, zrozumienie (i id??ca za nim mo??liwo????
          wyeliminowania) trudno??ci ??yciowych i otwieraj??ca si?? perspektywa
          bycia szcz????liwym w swoim ??yciu.
        </p>
        <h6>Jak w praktyce wygl??da ich stosowanie</h6>
        <p>
          Podczas sesji indywidualnej terapeuta pracuje u??ywaj??c figurek lub
          kartek papieru, kt??re obrazuj?? poszczeg??lnych cz??onk??w systemu lub
          poj??cia abstrakcyjne, je??li pojawiaj?? si?? one w polu pracy. Podczas
          sesji warsztatowych, w cz??onk??w systemu wcielaj?? si?? uczestnicy
          warsztatu.
        </p>
        <p>
          Cz??sto jest tak, ??e ju?? podczas jednego ustawienia udaje si?? dotrze??
          do przyczyny zg??aszanego problemu i odnale???? rozwi??zanie. Ustawienia
          same w sobie stanowi?? technik?? terapeutyczn??, mog?? tak??e s??u??y?? jako
          wsparcie dla procesu terapeutycznego os??b b??d??cych w terapii w??asnej ???
          niezale??nie od rodzaju tej terapii.
        </p>
        <p>
          W moim gabinecie prowadz?? osobne indywidualne sesje ustawie?? oraz
          wykorzystuj?? t?? metod?? jako uzupe??nienie systematycznej terapii.
        </p>
        <InlineImage
          reference={offerForParentsRef}
          imgSource={offerForParentsImage}
          titleText={<h5>Psycholog dla rodzic??w</h5>}
        />
        <h6>Jak mo??esz pom??c swojemu dziecku</h6>
        <p>
          Rodzicielstwo to stan ducha, a tak??e pe??noetatowy zaw??d z wysokimi
          wymaganiami. Rodzice maj?? w swoim r??ku klucze do zachowa?? dzieci.
          Cz??sto najpro??ciej i najefektywniej mo??na zmieni?? trudne zachowania
          dzieci, pokazuj??c rodzicom, jak tych kluczy u??ywa??.
        </p>
        <p>
          Moja pomoc skierowana jest na podnoszenie kompetencji w trudnym dziele
          bycia rodzicem. Rodzice czuj??cy si?? pewnie w swojej roli mog?? w pe??ni
          cieszy?? si?? ??yciem i dzie??mi.
        </p>
        <p>
          Jeste?? rodzicem, kochasz swoje dziecko. Czasem jednak czujesz si??
          bezradnie wobec wyzwa?? jakie stawia przed tob?? jego wychowywanie.
          Czasem nie potrafisz zapanowa?? nad nerwami, a potem masz poczucie winy
          za swoje zachowanie. Czasem niepokoi ci?? zachowanie twojego dziecka i
          nie wiesz czy to z nim jest ???co?? nie tak??? czy mo??e ty pope??niasz
          jakie?? b????dy. <b>Moja pomoc skierowana jest na podnoszenie kompetencji
          rodzicielskich. Rodzic czuj??cy si?? pewnie w swojej roli potrafi dawa?? to
          czego dziecko najbardziej potrzebuje ??? mi??o???? i poczucie
          bezpiecze??stwa.</b>
        </p>
        <p>
          Wychowywanie dzieci to zadanie, kt??re daje rado????, ale bywa te??
          wyzwaniem wywo??uj??cym silne reakcje emocjonalne, czasem trudne i
          nieprzyjemne. <b>Tak jak w ka??dej dziedzinie ??ycia, w rodzicielstwie
          tak??e mo??na si?? pogubi??.</b> Wa??ne jest aby, b??d??c rodzicem, rozumie?? z
          czego wynikaj?? zachowania dzieci, co one znacz?? i jak na nie reagowa??,
          aby osi??gn???? zamierzony efekt.
        </p>
        <h6>Kiedy warto zwr??ci?? si?? po pomoc?</h6>
        <ul>
          <li>
            Kiedy nie wiesz jak masz reagowa?? na zachowania swojego dziecka,
            czujesz si?? bezradnie,
          </li>
          <li>
            kiedy nie potrafisz zapanowa?? nad nerwami w reakcji na zachowania
            dziecka,
          </li>
          <li>
            kiedy w relacji z dzieckiem wi??cej jest chwil nerwowych i
            nieprzyjemnych ni?? mi??ych i radosnych,
          </li>
          <li>
            kiedy nie rozumiesz dlaczego twoje dziecko zachowuje si?? tak a nie
            inaczej,
          </li>
          <li>
            kiedy martwisz si??, czy jeste?? wystarczaj??co dobrym rodzicem, czy
            nie pope??niasz b????d??w, kt??re mog?? w niekorzystny spos??b odbi?? si?? na
            dziecku,
          </li>
          <li>kiedy masz poczucie braku wi??zi z dzieckiem,</li>
          <li>
            kiedy czujesz niech???? do w??asnego dziecka, nie akceptujesz dla jego
            zachowa??,
          </li>
          <li>
            kiedy odczuwasz emocjonalne odrzucenie przez dziecko (zw??aszcza
            nastoletnie),
          </li>
          <li>
            kiedy czujesz zm??czenie rodzicielstwem i brak towarzysz??cej mu
            rado??ci.
          </li>
        </ul>
        <h6>Jak pracuj?? z rodzicami</h6>
        <p>
          Spotkania z rodzicami (jednym lub obojgiem) to raczej coaching,
          doradztwo, nie terapia. Prowadz?? je zgodnie z zasadami Terapii SAS.
          <b>Rodzice dzi??ki odnalezieniu wewn??trznego szacunku, akceptacji i si??y
          poszerzaj?? i utrwalaj?? swoje rodzicielskie kompetencje.</b>
        </p>
        <p>
          Ilo???? i cz??stotliwo???? spotka?? ustalana jest ze wzgl??du na indywidualne
          potrzeby. Praca mo??e obejmowa?? wszystkie stosowane przeze mnie
          techniki psychoterapeutyczne, w tym ustawienia systemowe.
        </p>
        <InlineImage
          reference={offerCouplesTherapyRef}
          imgSource={offerCouplesTherapyImage}
          titleText={<h5>Terapia par</h5>}
        />
        <p>
          <b>Zwi??zek to co?? wi??cej ni?? ca??o???? ??? to ca??o????, kt??rej cz????ciami s??
          r??wnie?? ca??o??ci.</b> A ka??da ca??o???? to co?? wi??cej ni?? tylko suma jej
          cz????ci. Czyli zwi??zek to <b>ca??e Ja, ca??e Ty i jeszcze ca??e My</b>. ??atwo si??
          w tym pogubi??. Na dodatek, aby dobrze funkcjonowa??, ka??da z tych
          ca??o??ci wymaga dba??o??ci i uwagi. Kiedy zadba?? o Ja a kiedy po??wi??ci??
          si?? My? Kiedy Ty jest wa??niejsze od Ja? <b>Terapia pomaga rozpl??ta?? to,
          co spl??tane. Dostrzec ka??dy z element??w oddzielnie i jako po????czon?? ze
          sob?? ca??o????.</b> Jej celem jest poprawa, czy wr??cz umo??liwienie
          prawid??owej komunikacji mi??dzy partnerami. Odszukanie ??r??de?? kryzysu
          oraz znalezienie rozwi??za?? umo??liwiaj??cych jego przezwyci????enie.
        </p>
        <p>
          Terapia par to forma pomocy skierowana do prze??ywaj??cych kryzys
          ma????e??stw i par pozostaj??cych w zwi??zkach nieformalnych (hetero- i
          homoseksualnych).
        </p>
        <h6>Jak pracuj?? z parami</h6>
        <p>
          Podobnie jak w innych obszarach pracy, tak??e i tu wykorzystuj??
          r????norodne narz??dzia, w tym{" "}
          <Link href="#offer-system" style={{ textDecoration: "underline" }}>
            ustawienia systemowe
          </Link>
          . Podstaw?? pracy stanowi?? zasady terapii SAS czyli <b>odnalezienie, w
          oparciu o wewn??trzny szacunek, akceptacj?? i si????, zrozumienia samych
          siebie</b> i tego jakiego rodzaju warto??ci?? oraz czym jest zwi??zek z drug??
          osob??.
        </p>
        <p>
          Spotkania trwaj?? 1,5 h, odbywaj?? si?? regularnie, zgodnie z
          harmonogramem ustalonym na pierwszym spotkaniu.
        </p>
      </Col>
    </Container>
  );
}
