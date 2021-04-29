import React from 'react';
import style from './Skills.module.scss'
import {Skill, SkillType} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export type SkillsType = {
    skills: Array<SkillType>
}

export function Skills(props: SkillsType) {

    const skills = props.skills.map(skill => {
        return (
            <Skill
                key={skill.id}
                id={skill.id}
                skillTitle={skill.skillTitle}
                skillDiscription={skill.skillDiscription}
                style={skill.style}
            />
        )
    })

    return (
        <section className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title title='Skills'/>
                <div className={style.skills}>
                    {skills}
                </div>
            </div>
        </section>
    );
}