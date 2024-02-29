import React, {useContext, useState, useEffect} from 'react';
import ParkResultCard from './Components/ParkResultCard/ParkResultsCard';
import { Link } from 'react-router-dom';
import { NPContext } from '../../Context/NPContext';
import './SearchResults.css';
import Navbar from '../0Components/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const API_URL = "https://developer.nps.gov/api/v1/parks?";
var parkState = "";
var key = "g1hqBjvInvDturvINyC5YGgIki3VPTerwGbl3dNx";
var checkUrl;

const SearchResults = () => {
    const {GetContextSearchTerm, ChangeContextSearchTerm} = useContext(NPContext);
    var searchTerm = GetContextSearchTerm();
    const [searchData, setSearchData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    
    const GetSearchTerm = () => {
        searchTerm = GetContextSearchTerm();
        searchParks(searchTerm);
    }

    const searchParks = async (title) => {
        const response = await fetch(checkUrl = (API_URL + "&stateCode=" + parkState + "&q=" + title + "&api_key=" + key));
        const NPData = await response.json();
        setSearchData(Array.from(NPData.data));
        console.log('this is the search data you need');
        console.log(searchData);
        setIsLoading(false);
    }

    const keyenter = (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          document.querySelector('.srp-search-btn').click();
    }}

    useEffect(()=>{
        GetSearchTerm()
    }, [])

    useEffect(() =>{
        var input = document.querySelector('.srp-textbox');
        input?.addEventListener("keydown", keyenter);
    }, [])


    return(
        <div className='search-results-page'>
            <Navbar/>
            <div className="srp-searchbar">
                <input className="srp-textbox" type="text" value={searchTerm} placeholder="enter park name (ex: Yellowstone)" 
                    onChange={(e) => ChangeContextSearchTerm(e.target.value)} />
                <button className="srp-search-btn" type="submit" onClick={() => GetSearchTerm()}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </div>
            <div className="search-results-container">
                { isLoading? null :
                (searchData.length > 0?
                (searchData.map((item, i) => {
                    return <ParkResultCard key={item.fullName} fullname={item.fullName} image={item.images[0].url} parkCode={item.parkCode} />
                }))
                 : (<p className="srp-nrf">No search results found. Try again. </p>))}
            </div>
            <button className='srp-scrollTop-btn' onClick={() => {window.scrollTo(0,0)}}><FontAwesomeIcon icon={faArrowUp} /></button>
        </div>
    )
}

export default SearchResults;