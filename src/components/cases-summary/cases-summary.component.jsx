import React from "react";
import withCovidData from "../../with-covid-data";

const CasesSummary = ({covidData}) => {
    return(
        <div>
            <h1>Case Summary</h1>
            {covidData.map(caseSummary => 
                <div key={caseSummary.CountryCode}>
                    <h4>{caseSummary.CountryCode}_{caseSummary.Country} </h4> 
                    <p>Total Confirmed Cases = {caseSummary.TotalConfirmed}</p>
                </div>  
            )}
        </div>
    )}
    
export default withCovidData(CasesSummary);