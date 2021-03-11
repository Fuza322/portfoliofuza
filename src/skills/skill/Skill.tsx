import React from 'react';
import {SkillType} from '../../App';
import skillStyle from './Skill.module.css'

export function Skill(props: SkillType) {
    return (
        <div className={skillStyle.skill}>
            <div className={skillStyle.skillIcon}></div>
            <h3 className={skillStyle.skillTitle}>{props.skillTitle}</h3>
            <span className={skillStyle.skillDescriptionText}>{props.skillDiscription}</span>

        </div>
    )
}