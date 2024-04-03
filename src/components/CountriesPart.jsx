import React, {useState} from 'react';
import data from '../data.json';
import { ReactComponent as SearchIcon } from "../images/icon-search.svg";


function CountriesPart(){

    return(
        <div className='countries'>
            <div className='countries-search'>
                <div className='input-area'>
                    <SearchIcon id='countries-search-icon'/>
                    <input id="input"type='text' placeholder='Search for a country'/>
                </div>
                <select id="select">
                    <option value="">Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
            <div className='countries-part'>
            { data.map((countryData) => (
                <div className='country-card'>
                    <div className='country-card-image'>
                        <img src={countryData.flags.svg} alt={`Flag of ${countryData.name}`} />
                    </div>
                    <div className='country-card-info'>
                        <h4 id='country-card-info-name'>{countryData.name}</h4>
                        <div className='country-card-details'>
                            <p className='country-card-info-population'><b>Population: </b>{countryData.population}</p>
                            <p className='country-card-info-region'><b>Region: </b>{countryData.region}</p>
                            <p className='country-card-info-capital'><b>Capital: </b>{countryData.capital}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default CountriesPart;