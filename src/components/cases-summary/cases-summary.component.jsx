import React from "react";

class CasesSummary extends React.Component{
    constructor(){
        super();

        this.state = {
            casesSummary: []
        }
    }

    componentDidMount(){
        fetch("https://api.covid19api.com/summary")
        .then(response => response.json())
        .then(data => {this.setState({casesSummary: data.Countries.slice(0,15)})
        });
    }

    render(){
        return(
            <div>
            <h1>Case Summary</h1>
               {this.state.casesSummary.map(caseSummary => 
                <div key={caseSummary.CountryCode}>
                    <h4>{caseSummary.CountryCode}_{caseSummary.Country} </h4> 
                    <p>Total Confirmed Cases = {caseSummary.TotalConfirmed}</p>
                </div>
               
               )}
            </div>
        )};
}

export default CasesSummary;