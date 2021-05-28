import React from 'react';
import './Country.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const Count = (props) => {
    console.log(props.country);

    return (
        <div className="row">
            {props.countries.map((country) => (
                <div key={country.alpha3Code} className="col-2 country">
                    <Link to={`/country/${country.alpha3Code}`}><h4>{country.alpha3Code}</h4>
                        <p><img src={country.flag} style={{ width: "100px", height: "70px" }}></img></p>
                    </Link>
                </div>
            ))}
        </div>


    )

}


export default Count;