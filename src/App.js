import React, { useState } from "react";
import InputScreen from "./InputScreen";
import ResultScreen from "./ResultScreen";
import Navbar from "./Navbar";
import Logo from "./Logo";

function App() {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(0);

  const calculateIVFSuccess = (data) => {
    let successRate = 50; // Base success rate

    // Adjust success rate based on age
    if (data.age === "Under 30") successRate += 20;
    else if (data.age === "30 - 34") successRate += 10;
    else if (data.age === "35 - 37") successRate += 0;
    else if (data.age === "38 - 40") successRate -= 10;
    else if (data.age === "41 - 43") successRate -= 20;
    else successRate -= 30;

    // Adjust based on the number of cycles
    successRate += data.ivfCycles * 5;

    // Adjust for medical conditions
    if (data.conditions.includes("PCOS")) successRate -= 5;
    if (data.conditions.includes("Endometriosis")) successRate -= 10;
    if (data.conditions.includes("Low Ovarian Reserve")) successRate -= 15;
    if (data.conditions.includes("Male Factor Infertility")) successRate -= 10;

    // Adjust for procedures
    if (data.icsiProcedure) successRate += 5;
    if (data.pgtTesting) successRate += 5;

    // Ensure success rate is between 0 and 100
    successRate = Math.max(0, Math.min(100, successRate));

    setResult(successRate);
    setShowResult(true);
  };

  return (
    <div className="app">
      <Navbar />
      
      {!showResult ? (
        <InputScreen onCalculate={calculateIVFSuccess} />
      ) : (
        <ResultScreen result={result} />
      )}
    </div>
  );
}

export default App;
