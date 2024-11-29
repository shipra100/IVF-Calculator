import React, { useState } from "react";
import "./InputScreen.css";

const InputScreen = ({ onCalculate }) => {
  const [age, setAge] = useState("Under 30");
  const [ivfCycles, setIvfCycles] = useState(1);
  const [icsiProcedure, setIcsiProcedure] = useState(false);
  const [pgtTesting, setPgtTesting] = useState(false);
  const [conditions, setConditions] = useState([]);

  const handleConditionChange = (condition) => {
    setConditions((prev) =>
      prev.includes(condition)
        ? prev.filter((c) => c !== condition)
        : [...prev, condition]
    );
  };

  const handleSubmit = () => {
    onCalculate({
      age,
      ivfCycles,
      icsiProcedure,
      pgtTesting,
      conditions,
    });
  };

  return (
    <div className="input-screen">
      <h1>IVF Success Calculator</h1>
      <div className="form-group">
        <label>Which age range applies to you?</label>
        <div className="radio-group">
          {["Under 30", "30 - 34", "35 - 37", "38 - 40", "41 - 43", "Above 43"].map((range) => (
            <label key={range}>
              <input
                type="radio"
                name="age"
                value={range}
                checked={age === range}
                onChange={() => setAge(range)}
              />
              {range}
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Number of IVF Cycles?</label>
        <input
          type="range"
          min="1"
          max="5"
          value={ivfCycles}
          onChange={(e) => setIvfCycles(parseInt(e.target.value))}
        />
        <span>{ivfCycles}</span>
      </div>

      <div className="form-group">
        <label>Have you undergone these procedures before?</label>
        <div>
          <label>
            <input
              type="checkbox"
              checked={icsiProcedure}
              onChange={() => setIcsiProcedure((prev) => !prev)}
            />
            ICSI Procedure
          </label>
          <label>
            <input
              type="checkbox"
              checked={pgtTesting}
              onChange={() => setPgtTesting((prev) => !prev)}
            />
            PGT Testing
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Do you have any of these medical conditions?</label>
        <div>
          {["PCOS", "Endometriosis", "Low Ovarian Reserve", "Male Factor Infertility"].map(
            (condition) => (
              <label key={condition}>
                <input
                  type="checkbox"
                  value={condition}
                  checked={conditions.includes(condition)}
                  onChange={() => handleConditionChange(condition)}
                />
                {condition}
              </label>
            )
          )}
        </div>
      </div>

      <button onClick={handleSubmit}>Calculate</button>
    </div>
  );
};

export default InputScreen;
