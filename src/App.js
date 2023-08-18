import logo from "./assets/investment-calculator-logo.png";
import Header from "./components/Headers/Header";
import InputForm from "./components/UserInput/InputForm";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (input) => {
    setUserInput(input);
  };

  const yearlyData = []; 

  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header logo={logo} />

      <InputForm onCalculate={calculateHandler} />

      {!userInput && <p style={{textAlign:"center"}}>No results available</p>}
      {userInput && (
        <ResultsTable
          yearlyData={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
