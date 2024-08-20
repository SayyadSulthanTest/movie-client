import { useEffect, useState } from 'react';
import './App.css';
import api from './api/axiosConfig.js';
import Layout from './components/Layout.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.jsx';
import Header from './components/header/Header.jsx';
import Trailer from './components/trailer/Trailer.jsx';
import Reviews from './components/reviews/Reviews.jsx';

function App() {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState();
    const [reviews, setReviews] = useState([]);
    const getMovies = async () => {
        const response = await api.get('api/v1/movies');
        setMovies(response.data);
    };

    useEffect(() => {
        getMovies();
    }, []);

    const getMovieData = async (movieId) => {
        try {
            const response = await api.get(`api/v1/movies/${movieId}`);
            let movieData = response.data;
            setMovie(movieData);
            setReviews(movieData.reviewIds);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home movies={movies} />}></Route>
                    <Route path='/Trailer/:ytTrailerId' element={<Trailer />}></Route>
                    <Route
                        path='/Reviews/:movieId'
                        element={
                            <Reviews
                                getMovieData={getMovieData}
                                movie={movie}
                                reviews={reviews}
                                setReviews={setReviews}
                            />
                        }
                    ></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
