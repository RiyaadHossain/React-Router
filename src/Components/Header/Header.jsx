import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../About/About';
import Friends from '../Friends/Friends';
import Home from '../Home/Home';

const Header = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />} />
                <Route path='/friends' element={<Friends/>}/>
            </Routes>
        </div>
    );
};

export default Header;