import React from "react";
import styled from "styled-components";

//components
import Button from "../components/Button";

function Intro() {
  return (
    <Wrapper>
      <h2 className="first_title">FUNKTSIONAALSED NÕUDED</h2>
      <p>Artikli vaade on lihtne: tee päring ja kuva saadud vastus.</p>
      <p>
        Tabeli vaate puhul soovime näha, kuidas sa Array-dega ringi käia oskad:
        <br />
        Tabelis tuleb saadud vastus tabeli ridadel välja kuvada, sh tabelile
        3-sammuline sorteerimine peale panna (Asc, Desc, Default).
        <br />
        Tabelile tuleb ka lehejaotus külge panna. Funktsionaalsus peaks olema
        1:1 proovitöö lehel oleva lehejaotusega.
      </p>

      <h2>MITTEFUNKTSIONAALSED NÕUDED</h2>
      <p>
        * Proovitöö lahendamiseks peab kasutama Vue, React või Angular
        raamistiku.
        <br />
        * Proovitöö puhul soovitame vältida väliseid mooduleid (paginator, table
        sorter, jne).
        <br />* Kujundus ei pea olema sama, mis proovitööl, aga selle järgi
        tegemine annab lisapunkte.
      </p>

      <h2>API</h2>

      <p className="buttons_container">
        <Button buttonText="ARTIKKEL" onClick={console.log("ARTIKKEL")} />
        <Button buttonText="NIMEKIRI" onClick={console.log("ARTIKKEL")} />
      </p>

      <h2>MATERJALID</h2>

      <p className="buttons_container">
        <Button buttonText="FONT" onClick={console.log("ARTIKKEL")} />
        <Button buttonText="GRAAFIKA" onClick={console.log("ARTIKKEL")} />
      </p>
    </Wrapper>
  );
}

export default Intro;

const Wrapper = styled.div`
  color: white;

  h2 {
    font-size: 2rem;
    margin: 3.75rem 0 0;
    text-align: center;
  }

  p {
    margin: 2.5rem 0;
  }
  .buttons_container {
    text-align: center;
  }
`;
