import React from 'react'
import "./ProjectCard.css";


export default function ProjectCard({ projectname, ImageUrl, features }) {
    return (
        <div className="container">
            <div className="card">
                <div className="imgBx">
                    <img src={ImageUrl} alt="" />
                </div>
                <div className="content">
                <div className="projectname">
                    <h2>{projectname}</h2>
                    </div>
                    <div className="features">
                    <p>{features}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
