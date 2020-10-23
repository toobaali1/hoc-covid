import React from "react";

const withCovidData = (WrappedComponent) => {
    class WithCovidData extends React.Component{
        constructor(props){
            super(props);
    
            this.state = {
                covidData: []
            }
        }
    
        componentDidMount(){
            fetch(this.props.dataSource)
            .then(response => response.json())
            .then(data => {
               this.props.getCountriesArray ? this.setState({covidData: data.Countries.slice(0,15)}) :
               this.setState({covidData: data.slice(0,15)});
            });

        }
       
        render(){
            return <WrappedComponent covidData={this.state.covidData} />
        }
        
    }
    return WithCovidData; 
}

export default withCovidData;
