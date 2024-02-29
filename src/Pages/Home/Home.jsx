import React, {useState, useEffect, useContext} from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { HImageArr, VImageArr } from './0Components/NatureImages';
import { NPContext } from '../../Context/NPContext';
import Navbar from '../0Components/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

let imgHIdx = 0;
let imgVIdx = 0;

const Home = () => {
    const [natHImages, setHNatImages] = useState([HImageArr[0], HImageArr[1], HImageArr[2]])
    const [natVImages, setVNatImages] = useState([VImageArr[0], VImageArr[3], VImageArr[2], VImageArr[1]])

    useEffect(() => {
        const ChangeHNatImage = () => {
            let randnum = Math.floor(Math.random() * HImageArr.length)
            const newNatHImages = [...natHImages];
            newNatHImages[imgHIdx] = HImageArr[randnum];
            setHNatImages(newNatHImages);

            if (imgHIdx === natHImages.length - 1) {
                imgHIdx = 0;
            }
            else {
                imgHIdx++;
            }
        }

        const HInterval = setInterval(ChangeHNatImage, 6000)
        
        return () =>{
            clearInterval(HInterval)
        }
    
    }, [natHImages])

    useEffect(() => {
        const ChangeVNatImage = () => {
            let randnum = Math.floor(Math.random() * VImageArr.length)
            const newNatVImages = [...natVImages];
            newNatVImages[imgVIdx] = VImageArr[randnum];
            setVNatImages(newNatVImages);

            if (imgVIdx === natVImages.length - 1) {
                imgVIdx = 0;
            }
            else {
                imgVIdx++;
            }
        }
        const VInterval = setInterval(ChangeVNatImage, 9000)

        return () => {
            clearInterval(VInterval)
        }
    }, [natVImages])

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
                        <img className='img-size-1' src={natHImages[0]} alt='' />
                    </div>
                    <div className='img-size-2-container'>
                        <img className='img-size-2' src={natVImages[0]} alt='' />
                    </div>
                    <div className='img-size-1-container'>
                        <img className='img-size-1' src={natHImages[1]} alt='' />
                    </div>
                    <div className='img-size-2-container'>
                        <img className='img-size-2' src={natVImages[1]} alt='' />
                    </div>
                </div>
                <div className='column col-2'>
                    <div className='img-size-2-container'>
                        <img className='img-size-2' src={natVImages[2]} alt='' />
                    </div>
                    <div className='img-size-1-container'>
                        <img className='img-size-1' src={natHImages[2]} alt='' />
                    </div>
                    <div className='img-size-2-container'>
                        <img className='img-size-2' src={natVImages[3]} alt='' />
                    </div>
                    <div className='img-size-1-container'>
                        <img className='img-size-1' src={natHImages[1]} alt='' />
                    </div>
                </div>
                <div className='column col-3'>
                    <div className='img-size-1-container'>
                        <img className='img-size-1' src={natHImages[0]} alt='' />
                    </div>
                    <div className='img-size-2-container'>
                        <img className='img-size-2' src={natVImages[0]} alt='' />
                    </div>
                    <div className='img-size-1-container'>
                        <img className='img-size-1' src={natHImages[1]} alt='' />
                    </div>
                    <div className='img-size-2-container'>
                        <img className='img-size-2' src={natVImages[1]} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home