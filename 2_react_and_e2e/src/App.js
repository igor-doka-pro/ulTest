// import React, { useEffect, useState } from 'react';
// //
// const App = () => {
//     const [data, setData] = useState(null)
//     const [toggle, setToggle] = useState(false);
//     const [value, setValue] = useState('');
//     //
//     const onClick = () => setToggle(prev => !prev);
//     //
//     useEffect(() => {
//         setTimeout(() => {
//             setData({})
//         }, 100)
//     }, [])
//     return (
//         <div>
//             <h1 data-testid="value-elem">{value}</h1>
//             {toggle && <div data-testid="toggle-elem">toggle</div>}
//             {data && <div style={{ color: 'red' }}>data</div>}
//             <h1>Hello world</h1>
//             <button onClick={onClick} data-testid="toggle-btn">click me</button>
//             <input onChange={(e) => setValue(e.target.value)} type="text" placeholder="input value....." />
//         </div>
//     );
// };
// //
// export default App;

// import React from 'react';
// import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
// import MainPage from "./pages/MainPage";
// import AboutPage from "./pages/AboutPage";
// import ErrorPage from "./pages/ErrorPage";
// import Users from "./components/users/Users";
// import UserDetailsPage from "./pages/UserDetailsPage";
// import AppRouter from "./router/AppRouter";
// import Navbar from "./components/Navbar/Navbar";

import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';

const App = () => {
    return (
        <>
        <Link to="/" data-testid="main-link">main</Link>
        <Link to="/about" data-testid="about-link">about</Link>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </>
    );
};

export default App;
