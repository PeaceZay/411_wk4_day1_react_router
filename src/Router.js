import  Home  from './components/Home.js';
import  About  from './components/About.js';
import  Car  from './components/Car';
/* 
Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/

import React from 'react';
import { Routes, Route } from 'react-router';
// Write component imports here //

function Router() {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/car/:id" element={<Car />} />
    </Routes>
    );
}


// Start Router function here //
export default Router