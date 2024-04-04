import React, {useState} from "react";
import data from "../data.json";
import { ReactComponent as BackArrow } from "../images/left-back-arrow-svgrepo-com.svg";

function CountryDetails() {
    const CountryData = data[0]
    return(
        <div className="country">
            <button id="country-button"><BackArrow/>Back</button>
            <div className="country-details">
                <div className="country-image">
                    <img src={CountryData.flags.svg} alt={`Flag of ${CountryData.name}`} />
                </div>
                <div className="country-info">
                    <h1 id="country-title">{CountryData.name}</h1>
                    <div className="country-info-detalis">
                        <div className="country-details-firstrow">
                            <p><b>Native Name: </b> {CountryData.nativeName}</p>
                            <p><b>Population: </b> {CountryData.population}</p>
                            <p><b>Region: </b>{CountryData.region}</p>
                            <p><b>Sub Region: </b>{CountryData.subregion}</p>
                            <p><b>Capital: </b>{CountryData.capital}</p>
                        </div>
                        <div className="country-details-secondrow">
                            <p><b>Top Level Domain: </b>{CountryData.topLevelDomain.join(', ')}</p>
                            <p><b>Currencies: </b>{CountryData.currencies.map((currency) => currency.name).join(', ')}</p>
                            <p><b>Languages: </b> {CountryData.languages.map((language)=> language.name).join(', ')}</p>
                        </div>
                    </div>
                    <div className="country-details-downpart">
                        <b>Border Countries: </b>
                        <div className="borders-container">
                            {
                            CountryData.borders?.length > 0
                                ? CountryData.borders.map((border) => (
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