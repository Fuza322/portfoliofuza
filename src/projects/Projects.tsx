import React from 'react';
import projectsStyle from './Projects.module.css';
import style from "../common/styles/Common.module.css";
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
        <section className={projectsStyle.projectsBlock}>
            <div className={`${style.container} ${projectsStyle.projectsContainer}`}>
                <div className={projectsStyle.divProjectsTitle}>
                    <h2 className={style.sectionTitle}>Projects</h2>
                </div>
                <div className={projectsStyle.projects}>
                    {projects}
                </div>
            </div>
        </section>
    )
}