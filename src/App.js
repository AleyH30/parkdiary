import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchResults from './Pages/SearchResults/SearchResults';
import ParkInfo from './Pages/ParkInfo/ParkInfo';
import About from './Pages/About/About';
//import NotFound from './Pages/NotFound/NotFound';


const App = () => {
    return(
        <div className='app'>
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/parks' element={<SearchResults />} />
                <Route path='/parks/:parkCode' element={<ParkInfo />} />
                <Route path='/about' element={<About />} />
                {/*<Route path='*' element={<NotFound />} />*/}
            </Routes>
        </HashRouter>
        </div>
    )
}

export default App;