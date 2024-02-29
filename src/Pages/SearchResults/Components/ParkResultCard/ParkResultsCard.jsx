import React from 'react';
import './ParkResultCard.css'
import { Link } from 'react-router-dom';

const ParkResultCard = (props) => {
    return(
        <Link to={`/parks/${props.parkCode.replace(/ /g, "-").toLowerCase()}`} style={{textDecoration: 'none'}}>
            <div className='park-result-card'>
                <div className='parkcard-img-container'>
                    <img className='parkcard-img' src={props.image} alt=''/>
                </div>
                
                <p className='park-name'>{props.fullname}</p>
            </div>
        </Link>
    )
}

export default ParkResultCard