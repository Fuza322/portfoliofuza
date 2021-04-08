import React from 'react';
import projectsStyle from './Projects.module.scss';
import style from "../common/styles/Common.module.css";
import {Project, ProjectType} from "./project/Project";
import {Title} from '../common/components/title/Title';

export type ProjectsType = {
    projects: Array<ProjectType>
}

export function Projects(props: ProjectsType) {

    const projects = props.projects.map(project => {
        return (
            <Project
                key={project.id}
                id={project.id}
                projectName={project.projectName}
                projectDescription={project.projectDescription}
                style={project.style}
            />
        )
    })

    return (
        <section className={projectsStyle.projectsBlock}>
            <div className={`${style.container} ${projectsStyle.projectsContainer}`}>
                <Title title='Projects'/>
                <div className={projectsStyle.projects}>
                    {projects}
                </div>
            </div>
        </section>
    )
}