import React from 'react';
import style from './../../common/styles/Common.module.css'
import projectStyle from './Project.module.css'

export type ProjectType = {
    id: string
    projectName: string
    projectDescription: string
    style: {backgroundImage: string}
}

export function Project(props: ProjectType) {
    return (
        <div className={projectStyle.project}>
            <div className={projectStyle.projectImage} style={props.style}></div>
            <div className={projectStyle.projectBody}>
                <div className={projectStyle.projectInfo}>
                    <h3 className={`${style.nameItemText} ${projectStyle.nameProjectText}`}>{props.projectName}</h3>
                    <span className={style.descriptionItemText}>{props.projectDescription}</span>
                </div>
                <div className={projectStyle.projectButtonContainer}>
                    <button className={projectStyle.projectButton}>Read more</button>
                </div>
            </div>
        </div>
    )
}