import React, { useState } from "react";

const StringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const numArray = input.split(",").map(Number);
    const sum = numArray.reduce((sum, num) => sum + num, 0);
    setResult(sum);
  };

  return (
    <div>
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result && `your String calculation is ${result}`}
    </div>
  );
};

export default StringCalculator;
