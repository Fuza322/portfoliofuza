import React from 'react';
import {Button} from '../../common/components/button/Button';
import projectStyle from './Project.module.scss'

export type ProjectType = {
    id: string
    projectName: string
    projectDescription: string
    style: { backgroundImage: string }
}

export function Project(props: ProjectType) {

    return (
        <div className={projectStyle.project}>
            <div className={projectStyle.projectImage} style={props.style}></div>
            <div className={projectStyle.projectBody}>
                <div className={projectStyle.projectInfo}>
                    <h3 className={`${projectStyle.nameProjectText}`}>{props.projectName}</h3>
                    <span className={projectStyle.descriptionProjectText}>{props.projectDescription}</span>
                </div>
                <div className={projectStyle.projectButtonContainer}>
                    <Button
                        title={'View more'}
                    />
                </div>
            </div>
        </div>
    )
}