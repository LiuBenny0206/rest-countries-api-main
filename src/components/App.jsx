import React, {useState} from 'react';
import Header from './Header';
import CountriesPart from './CountriesPart';

function App(){
    return(
        <div className='main-part'>
            <Header />
            <CountriesPart />
        </div>
    );
}

export default App;