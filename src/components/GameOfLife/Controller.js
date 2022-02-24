import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";

function Controller({
  columns,
  setColumns,
  rows,
  setRows,
  speed,
  setSpeed,
  lifeProbability,
  setLifeProbability,
  gamePaused,
  setPaused,
  pause,
  play,
}) {
  //geting a temporarily copy of the data to save until we want to apply the changes
  const [columnsTemp, setColumnsTemp] = useState(columns);
  const [rowsTemp, setRowsTemp] = useState(rows);
  const [speedTemp, setSpeedTemp] = useState(speed);
  const [lifeProbabilityTemp, setLifeProbabilityTemp] = useState(
    lifeProbability
  );

  //this function handle the apply button click to update
  //the values of : columns,rows,speed & life probabilty
  const handleApply = () => {
    setColumns(columnsTemp);
    setRows(rowsTemp);
    setSpeed(speedTemp);
    setLifeProbability(lifeProbabilityTemp);
  };

  return (
    <Wrapper>
      <div className="form_item">
        <label>Grid width</label>
        <select
          name="width"
          onChange={(e) => setColumnsTemp(parseInt(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
          <option value={60}>60</option>
          <option value={70}>70</option>
          <option value={80}>80</option>
        </select>
        <i aria-hidden="true" className="fa fa-chevron-down fa-md"></i>
      </div>

      <div className="form_item">
        <label>Grid height</label>
        <select
          name="width"
          onChange={(e) => setRowsTemp(parseInt(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
        </select>
        <i aria-hidden="true" className="fa fa-chevron-down fa-md"></i>
      </div>

      <div className="form_item">
        <label>Speed</label>
        <select
          name="width"
          onChange={(e) => setSpeedTemp(parseInt(e.target.value))}
        >
          <option value="slow">Slow</option>
          <option value="normal">Normal</option>
          <option value="fast">Fast</option>
        </select>
        <i aria-hidden="true" className="fa fa-chevron-down fa-md"></i>
      </div>

      <div className="form_item">
        <label>Initial life probability</label>
        <select
          name="width"
          onChange={(e) => setLifeProbabilityTemp(parseInt(e.target.value))}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
          <option value="80">80</option>
          <option value="90">90</option>
          <option value="100">100</option>
        </select>
        <i aria-hidden="true" className="fa fa-chevron-down fa-md"></i>
      </div>

      <div className="form_item">
        <Button
          buttonText={gamePaused ? "PAUSE" : "RESUME"}
          onClick={(e) => {
            if (gamePaused) {
              play();
              setPaused(!gamePaused);
              return;
            } else {
              pause();
              setPaused(!gamePaused);
              return;
            }
          }}
        />
      </div>

      <div className="form_item">
        <Button buttonText="Apply" onClick={handleApply} />
      </div>
    </Wrapper>
  );
}

export default Controller;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 1.25rem;
  gap: 1.25rem;

  .form_item {
    flex-grow: 1;
    position: relative;

    label {
      color: white;
      font-size: 1rem;
    }

    select {
      position: relative;
      margin-top: 0.5rem;
      display: block;
      width: 100%;
      height: 2.375rem;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      padding: 0 1rem;
      border-radius: 0.5rem;
      cursor: pointer;
    }

    i {
      position: absolute;
      bottom: 0.15rem;
      right: 0;
      width: 2.375rem;
      height: 2.375rem;
      pointer-events: none;
      color: #333;
      display: flex;
      z-index: 999;
      justify-content: center;
      align-items: center;
    }

    button {
      width: 100%;
      margin-top: 1.25rem;
    }
  }
`;
