import React, {useState} from "react";
import data from "../data.json";
import { ReactComponent as BackArrow } from "../images/left-back-arrow-svgrepo-com.svg";

function CountryDetails({countryData, backToMainPage,isDarkMode, setIsDarkMode }) {
    const [borderCountry, setBorderCountry] = useState(null);  // 添加状态来存储边界国家信息

    const handleBtn = () => {
        backToMainPage(null);
    };

    const handleBorderBtnClick = (borderCountryCode) =>{
        const foundBorderCountry = data.find(country => country.alpha3Code === borderCountryCode);
        if (foundBorderCountry) {
            backToMainPage(foundBorderCountry); // 使用 backToMainPage 更新 App 组件中的 selectedCountry
          }
    };
    

    return(
        <div className="country">
            <button className={`country-button ${isDarkMode ? 'country-button-dark-mode' : ''}`} onClick={handleBtn}><BackArrow/>Back</button>
            <div className="country-details">
                <div className="country-image">
                    <img src={countryData.flags.svg} alt={`Flag of ${countryData.name}`} />
                </div>
                <div className={`country-info ${isDarkMode ? 'country-info-dark-mode' : ''}`}>
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
                        <div className={`borders-container ${isDarkMode ? 'borders-container-dark-mode' : ''}`}>
                            {
                            countryData.borders?.length > 0
                                ? countryData.borders.map((border) => (
                                    <button 
                                        key={border} 
                                        className="border-country"
                                        onClick={() => handleBorderBtnClick(border)}
                                    >{border}</button>
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