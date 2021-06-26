import React from "react"
import {Project, ProjectType} from "./project/Project"
import {Title} from "../common/components/title/Title"
import style from "./Projects.module.scss"

export type ProjectsType = {
    projects: Array<ProjectType>
}

export function Projects(props: ProjectsType) {

    const projects = props.projects.map(project => {
        return (
            <Project
                key={project.id}
                id={project.id}
                projectTitle={project.projectTitle}
                projectDescription={project.projectDescription}
                stackTechonogy={project.stackTechonogy}
                viewCodeLink={project.viewCodeLink}
                style={project.style}
            />
        )
    })

    return (
        <section id={"projectsId"} className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Title title="Projects"/>
                <div className={style.projects}>
                    {projects}
                </div>
            </div>
        </section>
    )
}