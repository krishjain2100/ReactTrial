import React from 'react';
import {Clock,Grid,Heart,Inbox,List,Table2,Gift,Calendar,Clipboard,Users,BarChart2,User,Table,Settings,Power,Receipt} from 'lucide-react'
import './styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <span className="blue">Dash</span><span className="black">Stack</span>
      </div>

      <div className="section">
        <div className="sidebar-item"><Clock className="icon"/> <span>Dashboard</span></div>
        <div className="sidebar-item"><Grid className="icon"/> <span>Products</span></div>
        <div className="sidebar-item"><Heart className="icon"/> <span>Favorites</span></div>
        <div className="sidebar-item"><Inbox className="icon"/> <span>Inbox</span></div>
        <div className="sidebar-item"><List className="icon"/> <span>Order Lists</span></div>
        <div className="sidebar-item"><Table2 className="icon"/> <span>Product Stock</span></div>
      </div>

      <hr className="divider"/>

      <div className="section">
        <div className="section-header">PAGES</div>
        <div className="sidebar-item active"><Gift className="icon"/> <span>Pricing</span></div>
        <div className="sidebar-item"><Calendar className="icon"/> <span>Calender</span></div>
        <div className="sidebar-item"><Clipboard className="icon"/> <span>To-Do</span></div>
        <div className="sidebar-item"><Users className="icon"/> <span>Contact</span></div>
        <div className="sidebar-item"><Receipt className="icon"/> <span>Invoice</span></div>
        <div className="sidebar-item"><BarChart2 className="icon"/> <span>UI Elements</span></div>
        <div className="sidebar-item"><User className="icon"/> <span>Team</span></div>
        <div className="sidebar-item"><Table className="icon"/> <span>Table</span></div>
      </div>

      <hr className="divider"/>

      <div className="section bottom">
        <div className="sidebar-item"><Settings className="icon"/> <span>Settings</span></div>
        <div className="sidebar-item"><Power className="icon"/> <span>Logout</span></div>
      </div>
    </div>
  );
};

export default Sidebar;
