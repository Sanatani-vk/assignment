import React from 'react'
import './Header.css'
import { Link } from 'react-router'
const Header = () => {
    return (
        <div className='header'>
            <h1>NetFlix</h1>
            <Link to={'/'}>Home</Link>
            <Link to={'/explore'}>Explore</Link>
            <Link to={'/latest'}>Latest Movies</Link>
            <Link to={'/upcoming'}>Upcoming Movies</Link>
            <div>
                <input type="text" name="title" id="title" placeholder='search here..'/>
                <button>Search</button>
            </div>
        </div>
    )
}

export default Header