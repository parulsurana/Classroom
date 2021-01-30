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
                    <h2>{projectname}</h2>
                    <p>{features}</p>
                </div>
            </div>

        </div>
    )
}
