import React from 'react';
import projectStyle from './Project.module.css'

export type ProjectPropsType = {
    projectName: string,
    projectDescription: string
}

export function Project(props: ProjectPropsType) {
    return (
        <div className={projectStyle.project}>
            <div className={projectStyle.projectImage}></div>
            <div className={projectStyle.projectDescription}>
                <p className={projectStyle.projectNameText}>{props.projectName}</p>
                <span className={projectStyle.projectDescriptionText}>
                    {props.projectDescription}
                </span>
                <div className={projectStyle.projectButtonContainer}>
                    <button className={projectStyle.projectButton}>Read more</button>
                </div>
            </div>
        </div>
    )
}