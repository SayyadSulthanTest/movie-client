import { useEffect, useState } from 'react';
import './App.css';
import api from './api/axiosConfig.js';
import Layout from './components/Layout.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.jsx';
import Header from './components/header/Header.jsx';
import Trailer from './components/trailer/Trailer.jsx';

function App() {
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await api.get('api/v1/movies');
        console.log(response.data);
        setMovies(response.data);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home movies={movies} />}></Route>
                    <Route path='/Trailer/:ytTrailerId' element={<Trailer />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
