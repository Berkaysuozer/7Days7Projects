import Country from './Components/Country'
import CountryInfos from './Components/CountryInfos'
import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  const [countries, setCountries] = useState([]);



  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(response => setCountries(response))
      .catch(error => console.log(error)
      )
  }, [])

  return (
    
    <Router>
      <div className="App">
        
        <Route
          path="/"
          exact
          render={() =>
            <div className="container">
              <Country countries={countries} />
            </div>
          }
        />
        <Route
          path="/country/:code"

          render={Renderprops => {
            const country = countries.find(country => country.alpha3Code === Renderprops.match.params.code)

            return <CountryInfos {...Renderprops} country={country} />
          }}

        />
      </div>
    </Router>

  );
}


