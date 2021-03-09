import React from 'react';
import projectsStyle from './Projects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";
import {ProjectsType} from "../App";

export function Projects(props: ProjectsType) {

    const projects = props.projects.map(project => {
        return (
            <Project
                key={project.id}
                id={project.id}
                projectName={project.projectName}
                projectDescription={project.projectDescription}
            />
        )
    })

    return (
        <div className={projectsStyle.projectsBlock}>
            <div className={`${styleContainer.container} ${projectsStyle.projectsContainer}`}>
                <h2 className={projectsStyle.projectsTitle}>Projects</h2>
                <div className={projectsStyle.projects}>
                    {projects}
                </div>
            </div>
        </div>
    )
}