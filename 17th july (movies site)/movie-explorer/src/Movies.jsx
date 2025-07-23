import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
const Movies = () => {

const [data, setData] = useState(null)
  useEffect(() => {
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=853ca00d')
      .then(res => {
        setData(res.data)
      }).catch(error => {
        console.log("Error fetching", error)
      })
  }, [])
    return (
        <div>
      {data ? (
        <div className='movies, movie-card'>
          <img src={data.Poster} alt={data.Title} style={{ maxWidth: '200px' }} />
            <div>
          <h2>{data.Title}</h2>
          <p>Year: {data.Year}</p>
          <p>Genre: {data.Genre}</p>
          <p>Director: {data.Director}</p>
          <p>Rated: {data.Rated}</p>
          <p>Language: {data.Language}</p>
          <p>Runtime: {data.Runtime}</p>
          </div>
        </div>
      ) : (
        <h1><svg xmlns="http://www.w3.org/2000/svg"className='spin'  width={40} viewBox="0 0 512 512"><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg></h1>
      )} 
        </div>
    )
}

export default Movies;