import React from "react";

class Countries extends React.Component{
    constructor(){
        super();

        this.state = {
            countries: []
        }
    }

    componentDidMount(){
        fetch("https://api.covid19api.com/countries")
        .then(response => response.json())
        .then(data => {
            this.setState({countries: data.slice(0,15)}) 
        });
    }

    render(){
        return(
            <div>
            <h1>Countries List</h1>
               {this.state.countries.map(country =>
                <div key={country.ISO2}>
                    <p>{country.ISO2}_{country.Country}</p>
                </div>
               )}
            </div>
        )};
}

export default Countries;