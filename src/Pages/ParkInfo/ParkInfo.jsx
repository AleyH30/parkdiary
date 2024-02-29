import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './ParkInfo.css';
import Navbar from '../0Components/Navbar/Navbar';
import clouds_fillin from '../Home/0Components/Images/cloud-placeholder.png'

const API_URL = "https://developer.nps.gov/api/v1/parks?";
var key = "g1hqBjvInvDturvINyC5YGgIki3VPTerwGbl3dNx";
var checkUrl;

// AIzaSyBggF__mwcBQbdUt8YeUxnhI81R4-au5cE google maps api key

const ParkInfo = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [parkData, setParkData] = useState([]);
    const {parkCode} = useParams();
    console.log(parkCode);

    const searchParks = async (pCode) => {
        const response = await fetch(checkUrl = (API_URL + "parkCode=" + pCode + "&api_key=" + key));
        const NPData = await response.json();
        setParkData(Array.from(NPData.data));
        console.log(parkData);
        setIsLoading(false);
    }

    useEffect(() => {
        searchParks(parkCode);
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        
        <div className="park-info-page">
            <Navbar/>
            {isLoading? null :
                <>
                    <div className='pi-header-container'>
                        <div className='pi-header-contents'>
                            <div className='pi-header-img-container'>
                                <img className='pi-header-img' src={parkData[0].images[0] === undefined? clouds_fillin : parkData[0].images[0].url} alt="" />
                            </div>
                            <p className='pi-header-name'>{parkData[0].fullName}</p>
                            <div className='pi-header-contact-container'>
                                <div className='pi-header-contact-contents'>
                                    <div>
                                        <p><b>LOCATION</b></p>
                                        <p>{parkData[0].addresses[0].city}, {parkData[0].addresses[0].stateCode}</p>
                                    </div>
                                    <div>
                                        <p><b>EMAIL</b></p>
                                        <p>{parkData[0].contacts.emailAddresses.length === 0 ? "Email unavailable" : `${parkData[0].contacts.emailAddresses[0].emailAddress}`}</p>
                                    </div>
                                    <div>
                                        <p><b>PHONE</b></p>
                                        <p>{parkData[0].contacts.phoneNumbers.length === 0 ? "Phone number unavailable" : `${parkData[0].contacts.phoneNumbers[0].phoneNumber}`}</p>
                                    </div>
                                    <div>
                                        <a href={`${parkData[0].url}`} target="_blank" rel="noopener noreferrer"><button className='pi-header-btn'>Learn More</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pi-info-container'>
                        <div className='pi-info-contents'>
                            <div className='pi-info-group'>
                                <p className='pi-info-title'>DESCRIPTION</p>
                                <p className='pi-info'>{parkData[0].description}</p>
                            </div>
                            <div className='pi-info-group'>
                                <p className='pi-info-title' >CLIMATE</p>
                                <p className='pi-info' >{parkData[0].weatherInfo}</p>
                            </div>
                        </div>
                    </div>
                    <div className='pi-cat-container pi-cat-container-a'>
                        <div className='pi-cat-list-container'>
                            <p className='pi-cat-list-header'>Activities</p>
                            <p className='pi-cat-list-subheader' >THINGS TO DO</p>
                            <p className='pi-cat-list-data'>{parkData[0].activities.map((item, i) => {return item.name + ", ";})}</p>
                        </div>
                        <div className='pi-cat-img-container'>
                            <img src={parkData[0].images[1] === undefined? clouds_fillin : parkData[0].images[1].url} alt='' />
                        </div>
                    </div>
                    <div className='pi-cat-container pi-cat-container-b'>
                        <div className='pi-cat-img-container'>
                            <img src={parkData[0].images[2] === undefined? clouds_fillin : parkData[0].images[2].url} alt='' />
                        </div>
                        <div className='pi-cat-list-container'>
                            <p className='pi-cat-list-header'>Topics</p>
                            <p className='pi-cat-list-subheader' >THINGS TO LEARN</p>
                            <p className='pi-cat-list-data'>{parkData[0].topics.map((item, i) => {return item.name + ", ";})}</p>
                        </div>
                    </div>
                </>}
        </div>
    )
}

export default ParkInfo;