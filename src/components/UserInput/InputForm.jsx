import React, { useState } from "react";

import styles from "./InputForm.module.css";

const initialUserInput = {
  "current-savings": 90000,
  "yearly-contribution": 240000,
  "expected-return": 1000000,
  duration: 5,
};

const InputForm = (props) => {
  const [input, setInput] = useState(initialUserInput);

  const submitFormHandler = (event) => {
    event.preventDefault();
    props.onCalculate(input)
  };

  const resetFormHandler = () => {
    setInput(initialUserInput);
  };

  const inputChangeHandler = (input, value) => {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <form onSubmit={submitFormHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            value={input['current-savings']}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            value={input['yearly-contribution'] || ''}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            value={input['expected-return'] || ''}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            value={input['duration']}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          onClick={resetFormHandler}
          type="reset"
          className={styles.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InputForm;
