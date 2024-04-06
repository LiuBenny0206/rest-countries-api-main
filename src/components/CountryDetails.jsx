import React, {useState} from "react";
import data from "../data.json";
import { ReactComponent as BackArrow } from "../images/left-back-arrow-svgrepo-com.svg";

function CountryDetails({countryData, backToMainPage}) {
    const handleBtn = () => {
        backToMainPage(null);
    };

    return(
        <div className="country">
            <button id="country-button" onClick={handleBtn}><BackArrow/>Back</button>
            <div className="country-details">
                <div className="country-image">
                    <img src={countryData.flags.svg} alt={`Flag of ${countryData.name}`} />
                </div>
                <div className="country-info">
                    <h1 id="country-title">{countryData.name}</h1>
                    <div className="country-info-detalis">
                        <div className="country-details-firstrow">
                            <p><b>Native Name: </b> {countryData.nativeName}</p>
                            <p><b>Population: </b> {countryData.population}</p>
                            <p><b>Region: </b>{countryData.region}</p>
                            <p><b>Sub Region: </b>{countryData.subregion}</p>
                            <p><b>Capital: </b>{countryData.capital}</p>
                        </div>
                        <div className="country-details-secondrow">
                            <p><b>Top Level Domain: </b>{countryData.topLevelDomain.join(', ')}</p>
                            <p><b>Currencies: </b>{countryData.currencies.map((currency) => currency.name).join(', ')}</p>
                            <p><b>Languages: </b> {countryData.languages.map((language)=> language.name).join(', ')}</p>
                        </div>
                    </div>
                    <div className="country-details-downpart">
                        <b>Border Countries: </b>
                        <div className="borders-container">
                            {
                            countryData.borders?.length > 0
                                ? countryData.borders.map((border) => (
                                    <button key={border} className="border-country">{border}</button>
                                ))
                                : 'None'
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountryDetails;