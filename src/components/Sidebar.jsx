import React from 'react';
import {Clock,Grid,Heart,Inbox,List,Table2,Gift,Calendar,Clipboard,Users,BarChart2,User,Table,Settings,Power,Receipt} from 'lucide-react'
import './styles/Sidebar.css';

const mainSection = [
  {Icon: Clock, label: 'Dashboard' },
  {Icon: Grid, label: 'Products' },
  {Icon: Heart, label: 'Favorites' },
  {Icon: Inbox, label: 'Inbox' },
  {Icon: List, label: 'Order Lists' },
  {Icon: Table2, label: 'Product Stock' },
];

const pagesSection = [
  {Icon: Gift, label: 'Pricing', active: true },
  {Icon: Calendar, label: 'Calender' },
  {Icon: Clipboard, label: 'To-Do' },
  {Icon: Users, label: 'Contact' },
  {Icon: Receipt, label: 'Invoice' },
  {Icon: BarChart2, label: 'UI Elements' },
  {Icon: User, label: 'Team' },
  {Icon: Table, label: 'Table' },
];

const bottomSection = [
  {Icon: Settings, label: 'Settings' },
  {Icon: Power, label: 'Logout' },
];

const renderSection = (items) => {
  return items.map(({ Icon, label, active }) => {
    const JSX = (
      <div className={`sidebar-item ${active ? 'active' : ''}`}>
        <Icon className="icon" /> <span>{label}</span>
      </div>
    );
    if (active) return <div key={label} className='wrapper'> {JSX} </div>
    return <div key={label}> {JSX} </div>
  });
};



const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <span className="blue">Dash</span><span className="black">Stack</span>
      </div>
      <div className="section">{renderSection(mainSection)}</div>
      <hr className="divider" />
      <div className="section">
        <div className="section-header">PAGES</div> 
        {renderSection(pagesSection)}
      </div>
      <hr className="divider" />
      <div className="section bottom">{renderSection(bottomSection)}</div>
    </div>
  );
};

export default Sidebar;
