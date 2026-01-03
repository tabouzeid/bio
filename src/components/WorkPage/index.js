import React from 'react';
import ProjectDetail from '../ProjectDetail/';
import { projects } from '../../data/projects';
import './style.css';

function WorkPage () {

    return (
        <div>
            <div className="bg-color">
                <div className="container">
                    <div className="row ">
                        <section className="col-12 text-center">
                            <p id="i-am-taher">Work.</p>
                        </section>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <section className="col-12 justify-content-center text-center">
                        <img src="./assets/img/pencil.svg" className="pencil" alt="Pencil"/>
                        <p className="title">What I've been up to.</p>
                        <p>Here's a selection of some of my work.</p>
                    </section>
                </div>
            </div>
            {projects.map((project) => <ProjectDetail key={project.id} project={project} />)}
        </div>
    );
}

export default WorkPage;