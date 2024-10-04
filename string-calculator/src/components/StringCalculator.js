import React from "react";
import { useCalculator } from "../hooks/useStringCalculator";
import "./StringCalculator.css"; // Import the CSS file

const StringCalculator = () => {
  const { input, result, error, handleInputChange, handleCalculate } =
    useCalculator();

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter numbers"
        className="calculator-input"
      />
      <button onClick={handleCalculate} className="calculator-button">
        Calculate
      </button>
      {result !== null && (
        <span className="calculator-result">
          Your String calculation is {result}
        </span>
      )}
      {error && <span className="calculator-error">{error}</span>}
    </div>
  );
};

export default StringCalculator;
