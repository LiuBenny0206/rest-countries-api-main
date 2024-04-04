import React, {useState} from 'react';
import Header from './Header';
import CountriesPart from './CountriesPart';
import CountryDetails from './CountryDetails';

function App(){
    const [search, setSearch] = useState(true);


    return(
        <div className='main-part'>
            <Header />
            {!search && <CountriesPart />}
            {search && <CountryDetails />}
        </div>
    );
}

export default App;