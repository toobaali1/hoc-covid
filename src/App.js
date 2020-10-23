import React from 'react';
import './App.css';
import Countries from "./components/countries/countries.component";
import CasesSummary from "./components/cases-summary/cases-summary.component";


 const App = () => {
  return (
    <div className="App">
      <Countries />
      <CasesSummary />
    </div>
  );
}

export default App;
