import React, {useState, useEffect, useContext} from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { HImageArr, VImageArr } from './0Components/NatureImages';
import { NPContext } from '../../Context/NPContext';
import Navbar from '../0Components/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [natHImages, setHNatImages] = useState(HImageArr)
    const [natVImages, setVNatImages] = useState(VImageArr)
    const [imgHIdx, setImgHIdx] = useState(0)
    const [imgVIdx, setImgVIdx] = useState(0)
    const [hv, setHV] = useState("H")

    const ChangeHVNatImage = () => {
        if (hv === "H"){
            if (imgHIdx === natHImages.length - 1) {
                setImgHIdx(0)
            }
            else {
                setImgHIdx(imgHIdx + 1);
            }
            setHV("V")
        }
        else if(hv === "V"){
            if (imgVIdx === natVImages.length - 1) {
                setImgVIdx(0)
            }
            else {
                setImgVIdx(imgVIdx + 1);
            }
            setHV("H")
        }
            
    }
    useEffect(() => {
        setTimeout(ChangeHVNatImage, 2000)
    }, [])
    useEffect(() => {
        const HVTimeout = setTimeout(ChangeHVNatImage, 10000)
        
        return () =>{
            clearTimeout(HVTimeout)
        }
    
    }, [imgHIdx, imgVIdx])

    /*--------------------------------------------------------------------------*/

    const {ChangeContextSearchTerm} = useContext(NPContext)

    const [searchTerm, setSearchTerm] = useState('');

    const keyenter = (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          document.querySelector('.search-btn').click();
    }}

    useEffect(() =>{
        var input = document.querySelector('.search-textbox');
        input?.addEventListener("keydown", keyenter);
    }, [])
    
    

    return (
        <div className='home-page'>
            <Navbar/>
            <div className='search-container'>
                <div className="search-contents">
                    <h1>Search For A Park...</h1>
                    <div className="searchbar">
                        <input className="search-textbox" type="text" value={searchTerm} placeholder="enter park name (ex: Yosemite)" 
                            onChange={(e) => setSearchTerm(e.target.value)} />
                        <Link to='/parks'><button className="search-btn" type="submit"
                            onClick={() => ChangeContextSearchTerm(searchTerm)}><FontAwesomeIcon icon={faMagnifyingGlass} /></button></Link>
                    </div>
                </div>
            </div>
            <div className='image-grid'>
                <div className='column col-1'>
                    <div className='img-size-1-container'>
                        <img className='img-size-1' src={natHImages[imgHIdx]} alt='' />
                    </div>
                    <div className='img-size-2-container'>
                        <img className='img-size-2' src={natVImages[imgVIdx]} alt='' />
                    </div>
                    <div className='img-size-1-container'>
                        <img className='img-size-1' src={natHImages[imgHIdx]} alt='' />
                    </div>
                    <div className='img-size-2-container'>
                        <img className='img-size-2' src={natVImages[imgVIdx]} alt='' />
                    </div>
                </div>
                <div className='column col-2'>
                    <div className='img-size-2-container'>
                        <img className='img-size-2' src={natVImages[imgVIdx]} alt='' />
                    </div>
                    <div className='img-size-1-container'>
                        <img className='img-size-1' src={natHImages[imgHIdx]} alt='' />
                    </div>
                    <div className='img-size-2-container'>
                        <img className='img-size-2' src={natVImages[imgVIdx]} alt='' />
                    </div>
                    <div className='img-size-1-container'>
                        <img className='img-size-1' src={natHImages[imgHIdx]} alt='' />
                    </div>
                </div>
                <div className='column col-3'>
                    <div className='img-size-1-container'>
                        <img className='img-size-1' src={natHImages[imgHIdx]} alt='' />
                    </div>
                    <div className='img-size-2-container'>
                        <img className='img-size-2' src={natVImages[imgVIdx]} alt='' />
                    </div>
                    <div className='img-size-1-container'>
                        <img className='img-size-1' src={natHImages[imgHIdx]} alt='' />
                    </div>
                    <div className='img-size-2-container'>
                        <img className='img-size-2' src={natVImages[imgVIdx]} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home