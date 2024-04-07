import React, {useState} from 'react';
import Header from './Header';
import CountriesPart from './CountriesPart';
import CountryDetails from './CountryDetails';

function App() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleCountrySelect = (countryData) => {
        setSelectedCountry(countryData);
    };

    return (
        <div className={`main-part ${isDarkMode ? 'main-part-dark-mode' : ''}`}>
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            {!selectedCountry ? (
                <CountriesPart onCountrySelect={handleCountrySelect} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
            ) : (
                <CountryDetails countryData={selectedCountry} backToMainPage={setSelectedCountry} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
            )}
        </div>
    );
}


export default App;