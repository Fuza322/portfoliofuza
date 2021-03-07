import React from 'react';
import skillStyle from './Skill.module.css'

export type SkillPropsType = {
    title: string,
    description: string
}

export function Skill(props: SkillPropsType) {
    return(
        <div className={skillStyle.skill}>
            <div className={skillStyle.icon}></div>
            <h3>{props.title}</h3>
            <span className={skillStyle.skillDescription}>{props.description}</span>
        </div>
    )
}