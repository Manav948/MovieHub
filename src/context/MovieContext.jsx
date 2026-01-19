import React, { use } from "react";
import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();
const showContext = createContext();
export const useMovieContext = () => useContext(MovieContext);
export const useshowContext = () => useContext(showContext);
export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const storedMovies = localStorage.getItem("movies");
        if (storedMovies) {
            setMovies(JSON.parse(storedMovies));
        }

    }, [])
    useEffect(() => {
        const storedShows = localStorage.getItem("shows");
        if (storedShows) {
            setShows(JSON.parse(storedShows));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("movies", JSON.stringify(movies));
    }, [movies])
    useEffect(() => {
        localStorage.setItem("shows", JSON.stringify(shows))
    }, [shows])
    
    const addMovie = (movie) => {
        setMovies((prev) => [...prev, movie]);
    };
    const removeMovie = (id) => {
        setMovies((prev) => prev.filter((movie) => movie.imdbID !== id));
    };
    const isFavourite = (movie) => {
        return movies.some((item) => item.imdbID === movie);
    }
    const addShow = (show) => {
        setShows((prev) => [...prev, show]);
    }
    const removeShow = (id) => {
        setShows((prev) => prev.filter((show) => show.imdbID !== id));
    }
    const isShowFavourite = (show) => {
        return shows.some((item) => item.imdbID === show);
    }
    return (
        <MovieContext.Provider value={{ movies, addMovie, removeMovie, isFavourite, shows, addShow, removeShow, isShowFavourite }}>
            {children}
        </MovieContext.Provider>
    );

}
export default MovieProvider;