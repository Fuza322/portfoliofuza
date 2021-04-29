import React from 'react';
import skillStyle from './Skill.module.scss'

export type SkillType = {
    id: string,
    skillTitle: string,
    skillDiscription: string,
    style: { backgroundImage: string }
}

export function Skill(props: SkillType) {
    return (
        <div data-aos="zoom-in" data-aos-duration="550" className={skillStyle.skill}>
            <div className={skillStyle.skillIcon} style={props.style}></div>
            <div className={skillStyle.skillInfo}>
                <h3 className={skillStyle.nameSkillText}>{props.skillTitle}</h3>
                <span className={skillStyle.descriptionSkillText}>{props.skillDiscription}</span>
            </div>
        </div>

    )
}