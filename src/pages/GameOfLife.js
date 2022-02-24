import React, { useEffect, useState } from "react";
import styled from "styled-components";

//game components
import Controller from "../components/GameOfLife/Controller";
import Grid from "../components/GameOfLife/Grid";
import PercentageBar from "../components/GameOfLife/PercentageBar";

function GameOfLife() {
  const [intervalId, setIntervalId] = useState(null);
  const [columns, setColumns] = useState(50);
  const [rows, setRows] = useState(20);
  const [speed, setSpeed] = useState(100);
  const [lifeProbability, setLifeProbability] = useState(10);
  const [gamePaused, setPaused] = useState(true);

  //intializing the grid
  const gridTemp = Array(rows)
    .fill()
    .map(() => Array(columns).fill(false));
  const [gridFull, setGridFull] = useState(gridTemp);

  //settings the table with every change to the columns or rows
  useEffect(() => {
    const temp = Array(rows)
      .fill()
      .map(() => Array(columns).fill(false));
    setGridFull(temp);
  }, [columns, rows]);

  //this function generates a copy of a given array
  function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  //this function sets an interval to run infinitely the play() function
  const playButton = () => {
    clearInterval(intervalId);
    setIntervalId(setInterval(play, speed));
  };

  //this function will generate a randow seed then start going and following the game rules
  const play = () => {
    let gridCopy = arrayClone(gridFull);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][j] = true;
        }
      }
    }
    setGridFull([...gridCopy]);
    let g = [...gridFull];
    let g2 = arrayClone(gridCopy);

    //game rules
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        //this is how many neighbor it have
        let count = 0;

        if (i > 0) if (g[i - 1][j]) count++;
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
        if (i > 0 && j < columns - 1) if (g[i - 1][j + 1]) count++;
        if (j < columns - 1) if (g[i][j + 1]) count++;
        if (j > 0) if (g[i][j - 1]) count++;
        if (i < rows - 1) if (g[i + 1][j]) count++;
        if (i < rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
        if (i < rows - 1 && j < columns - 1) if (g[i + 1][j + 1]) count++;

        //if it has less tha 2 neighbors or more than 3 neighbors it dies
        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;

        //if it is dead and it has 3 neighbors it lives
        if (!g[i][j] && count === 3) g2[i][j] = true;
      }
    }

    setGridFull([...g2]);
  };

  //this function will clear the interval of reruning the play function that way the game will stop will stop
  const pause = () => {
    clearInterval(intervalId);
  };

  useEffect(() => {
    play();
    playButton();
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <h1>CONWAYS GAME OF LIFE</h1>
      <Controller
        columns={columns}
        setColumns={setColumns}
        rows={rows}
        setRows={setRows}
        speed={speed}
        setSpeed={setSpeed}
        lifeProbability={lifeProbability}
        setLifeProbability={setLifeProbability}
        gamePaused={gamePaused}
        setPaused={setPaused}
        play={playButton}
        pause={pause}
      />

      <PercentageBar />
      <Grid gridFull={gridFull} />
    </Wrapper>
  );
}

export default GameOfLife;

const Wrapper = styled.div`
  h1 {
    color: white;
    text-align: center;
    text-transform: uppercase;
    font-size: 2.8125rem;
    margin: 2rem;
  }
`;
