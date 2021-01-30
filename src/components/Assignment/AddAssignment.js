import React from 'react'
import Sidebar from '../Sidebar';
import "./AddAssignment.css";
export default function AddAssignment() {
    return (
        <div className="assignment">
           <div className="Addassignment_header">
        <Sidebar
          Menuicon={true}
          sideMenu={true}
          SidebuttonTypeTwo={true}
          SidebuttonTypeFive={true}
        />
      </div> 
        </div>
    )
}
