import './CountryInfos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';

const CountryInfos = (props) => {
    console.log(props);


    return <div className="countryInfos">
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>{props.country.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p><img src={props.country.flag} style={{ height: "400px", width: "450px" }}></img></p>
                <h3>Name : {props.country.name}</h3>
                <h3>Native Name : {props.country.nativeName}</h3>
                <h3>Capital : {props.country.capital}</h3>
                <h3>Region : {props.country.region}</h3>


            </Modal.Body>


        </Modal.Dialog>


    </div>
}


export default CountryInfos;
