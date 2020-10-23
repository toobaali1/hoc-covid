import React from "react";
import withCovidData from "../../with-covid-data";

const Countries = ({covidData}) => {
  
    return(
        <div>
        <h1>Countries List</h1>
            {covidData.map(country =>
            <div key={country.ISO2}>
                <p>{country.ISO2}_{country.Country}</p>
            </div>
            )}
        </div>
    )};

export default withCovidData(Countries);