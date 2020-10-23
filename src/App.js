import React from 'react';
import './App.css';
import Countries from "./components/countries/countries.component";
import CasesSummary from "./components/cases-summary/cases-summary.component";


 const App = () => {
  return (
    <div className="App">
      <Countries dataSource="https://api.covid19api.com/countries"/>
      <CasesSummary dataSource="https://api.covid19api.com/summary" getCountriesArray/>
    </div>
  );
}

export default App;
