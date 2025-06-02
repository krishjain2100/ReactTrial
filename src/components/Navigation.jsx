import React from 'react'
import {Menu, Search, ChevronDown} from 'lucide-react'
import './styles/Navigation.css'

import bellIcon from '../assets/icon.jpg'
import ukFlag from '../assets/flag.png'
import moniroy from '../assets/moniroy.png'

const Navigation = ({sidebarStatus, setSidebarStatus}) => {
  return (
    <header className="header">
      <div className="left">
        <Menu className="menu-icon" onClick={()=>{setSidebarStatus(!sidebarStatus)}}/>
        <div className="search-container">
          <Search className="search-icon"/>
          <input type="text" placeholder="Search" className="search-input"/>
        </div>
      </div>

      <div className="right">
        <div className="icon-wrapper">
          <img src={bellIcon} alt="Notifications" className="bell-icon"/>
          <span className="badge">6</span>
        </div>

        <div className="lang-select">
          <img src={ukFlag} alt="UK flag" className="flag-icon" />
          <span className="lang-label">English</span>
          <ChevronDown className="chevron-icon-lang" />
        </div>

        <div className="user-menu">
          <img src={moniroy} alt="Moni Roy" className="avatar" />
          <div className="user-details">
            <span className="user-name">Moni Roy</span>
            <span className="user-role">Admin</span>
          </div>
          <ChevronDown className="chevron-icon-user" />
        </div>
      </div>
    </header>
  )
}

export default Navigation
