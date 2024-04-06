import React, {useState} from 'react';
import Header from './Header';
import CountriesPart from './CountriesPart';
import CountryDetails from './CountryDetails';

function App(){
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountrySelect = (countryData) => {
        setSelectedCountry(countryData);
    };

    return(
        <div className='main-part'>
            <Header />
            {!selectedCountry ? (
                // 如果没有选中的国家，展示国家列表
                <CountriesPart onCountrySelect={handleCountrySelect} />
            ) : (
                // 否则，展示选中国家的详细信息
                <CountryDetails countryData={selectedCountry} backToMainPage={setSelectedCountry}/>
            )}
        </div>
    );
}

export default App;