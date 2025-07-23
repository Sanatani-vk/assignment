import React from 'react'
import Movies from '../Movies'
const MovieHome = () => {
    return (

        <div>
    <h1 className='h1'>All Movies</h1>
    <div className='card'>
     <Movies/>
     <Movies/>
     <Movies/>
     <Movies/>
    </div>
    <div className='card'>
      <Movies/>
      <Movies/>
     <Movies/>
     <Movies/>
    </div> 
    </div>
    )
}

export default MovieHome