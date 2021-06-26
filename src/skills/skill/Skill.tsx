import React from "react"
import style from "./Skill.module.scss"

export type SkillType = {
    id: string,
    skillTitle: string,
    skillDiscription: string,
    style: { backgroundImage: string }
}

export function Skill(props: SkillType) {
    return (
        <div data-aos="zoom-in" data-aos-duration="550" className={style.skill}>
            <div className={style.skillIcon} style={props.style}></div>
            <div className={style.skillInfo}>
                <h3 className={style.nameSkillText}>{props.skillTitle}</h3>
                <span className={style.descriptionSkillText}>{props.skillDiscription}</span>
            </div>
        </div>

    )
}