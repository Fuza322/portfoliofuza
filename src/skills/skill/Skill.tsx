import React from 'react';
import style from './../../common/styles/Common.module.css'
import skillStyle from './Skill.module.scss'

export type SkillType = {
    id: string,
    skillTitle: string,
    skillDiscription: string
}

export function Skill(props: SkillType) {
    return (
        <div className={skillStyle.skill}>
            <div className={skillStyle.skillIcon}></div>
            <h3 className={skillStyle.nameSkillText}>{props.skillTitle}</h3>
            <span className={skillStyle.descriptionSkillText}>{props.skillDiscription}</span>
        </div>
    )
}