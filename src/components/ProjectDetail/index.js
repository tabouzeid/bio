import React from 'react';
import './style.css';

function ProjectDetail (props) {
    return (
        <div style={{backgroundColor: props.project.bgColor}}>
            <div className="container">
                <div className="row">
                    <section className="col text-center proj-img">
                        <a href={"https://github.com/"+props.project.id} target="_blank" style={{color: "black"}} rel="noopener noreferrer">
                            <p className="project-title">{props.project.title}</p>
                        </a> 
                        <p>{props.project.description}</p>
                        <a href={props.project.appUrl} target="_blank" rel="noopener noreferrer">
                            <img src={props.project.imageUrl} alt="App Screenshot" className="hello-image" />
                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;