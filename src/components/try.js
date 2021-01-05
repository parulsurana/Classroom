import React from 'react'
import './try.css';
import ClassNavBar from './ClassNavBar';
import Button from './Button';
import Sidebar from './Sidebar';
export default function Try() {
    return (
    //    <div className='try'>
       <div className="try-bar">
       <Sidebar />
       <div className="try-button">
       <Button buttonName='tryButton' label='add' />
       </div>
       </div>
    //    </div>
    )
}

