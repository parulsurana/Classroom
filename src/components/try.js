import React from 'react'
import './try.css';
import Button from './Button';
import Sidebar from './Sidebar';
export default function Try() {
    return (
       <div className="try-bar">
       <Sidebar SidebuttonTypeOne={true} SidebuttonTypeTwo={true}/>
       <div className="try-button">
       </div>
       </div>
    )
}

