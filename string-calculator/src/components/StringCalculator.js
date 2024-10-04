import React from "react";
import { useCalculator } from "../hooks/useStringCalculator";

const StringCalculator = () => {
  const { input, result, error, handleInputChange, handleCalculate } =
    useCalculator();

  return (
    <div>
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter numbers"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result && <span>your String calculation is {result}</span>}
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};

export default StringCalculator;
