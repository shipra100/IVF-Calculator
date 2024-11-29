import React from "react";
import "./ResultScreen.css";

const ResultScreen = ({ result }) => {
  return (
    <div className="result-screen">
      <h1>Your estimated IVF Success Rate is</h1>
      <div className="result-circle">
        <span>{result}%</span>
      </div>
      <p>With your selected IVF cycle</p>
    </div>
  );
};

export default ResultScreen;
