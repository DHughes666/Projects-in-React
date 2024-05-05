import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('')

    const fetchImages = async () => {
        setLoading(true);
        let url;

        if(query){
            url = `${searchUrl}${clientID}$page=${page}&query=${query}`
        } else {
            url = `${mainUrl}${clientID}&page=${page}`
        }
        
        try {
            const response = await fetch(url)
            const data = await response.json()
            setPhotos((oldPhotos) => {
                if(query && page === 1){
                    return data.results
                }
                else if (query){
                    return [...oldPhotos, ...data.results]
                }else {
                    return [...oldPhotos, ...data]
                }
            })
            setLoading(false)
        } catch (e) {
            setLoading(false);
            console.log(e);
        }
    }

    useEffect(() => {
        fetchImages();
    }, [page])

    useEffect(() => {
        const event = window.addEventListener('scroll', () => {
            // console.log(`innerHeight: ${window.innerHeight}`);
            // console.log(`scrollY: ${window.scrollY}`);
            // console.log(`body height: ${document.body.scrollHeight}`);
            if(!loading && (window.innerHeight + window.scrollY) >= 
                document.body.scrollHeight - 2){
                    setPage((oldPage) => {
                        return oldPage + 1;
                    })
                }
        });
        return () => window.removeEventListener('scroll', event);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchImages();
    }

    return (
        <main>
            <section className='search'>
                <form className='search-form'>
                    <input
                        type='text'
                        placeholder='search'
                        className='form-input'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button 
                    type='submit' 
                    className='submit-btn'
                    onClick={handleSubmit}>
                        <FaSearch />
                    </button>
                </form>
            </section>
            <section className='photos'>
                <div className='photos-center'>
                    {photos.map((image) => {
                        console.log(image);
                        return <Photo key={image.id} {...image}/>;
                    })}
                </div>
                {loading && <h2 className='loading'>Loading...</h2>}
            </section>
        </main>
    )
}

export default App
