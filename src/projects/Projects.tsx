import React from 'react';
import style from './Projects.module.scss';
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
                stackTechonogy={project.stackTechonogy}
                style={project.style}
                viewCodeLink={project.viewCodeLink}
            />
        )
    })

    return (
        <section id={'projectsId'} className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Title title='Projects'/>
                <div className={style.projects}>
                    {projects}
                </div>
            </div>
        </section>
    )
}