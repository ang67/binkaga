import React from 'react';
import SearchButton from '../../components/Search';
const Home = () => {

    return (
        <div className='App-body'>
            <div classsName='search-zone'>
                <select className=" engine-select" aria-label="Default select example">
                    <option selected>Search engine</option>
                    <option value="bing">Bing</option>
                    <option value="duckduckgo">DuckDuckGo</option>
                    <option value="google">Google</option>
                    <option disabled value="qwant">Qwant</option>
                </select>
                <SearchButton />
            </div>
        </div>
    );
}

export default Home;
