import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
 


function Navbar() { 

  const toggleSidebar = () => {
    alert('Opps!! Sidebar in development')
  }
  return (
    <div className='nav-bar'>
      <div className="left-section">
        <RxHamburgerMenu id='menu-icon' onClick={toggleSidebar}/>
        
          <Link to="/home" className='home-link'>
              <h3>MovieVault</h3>  
          </Link>
      </div>

      <Link to="/Search"><button id='search-btn'>Go to Search</button></Link>

      <ul>
      <Link to="/Movies" className='home-link'><li>Movies</li></Link>
      <Link to="/TvShows" className='home-link'><li>Series</li></Link>
      <Link to="/UpComing" className='home-link'><li>Coming</li></Link>
      </ul>
    </div>
  )
}

export default Navbar;
