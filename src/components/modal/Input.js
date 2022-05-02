import React from "react";
// import Total from "./Total";

export default function Input({ value, setValue }) {
  const handleValue = (text) => {
    if (text === "+") {
      setValue(value + 1);
    }

    if (value === 5) {
      setValue(5);
    }
    if (text === "-" && value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div>
      <div className="input-container">
        <button onClick={() => handleValue("-")} className="input-btn"></button>
        <div className="number-input">
          <input
            className="quantity"
            min="0.0"
            max={5}
            name="quantity"
            value={value}
            type="number"
          />
        </div>
        <button
          onClick={() => handleValue("+")}
          style={{ visibility: value === 5 ? "hidden" : "visible" }}
          className="plus input-btn"
        ></button>
      </div>
      {/* <Total value={value} /> */}
    </div>
  );
}
