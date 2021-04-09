import React from 'react';
import skillsStyle from './Skills.module.scss'
import style from "../common/styles/Common.module.css";
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
        <section className={skillsStyle.skillsBlock}>
            <div className={`${style.container} ${skillsStyle.skillsContainer}`}>
                <Title title='Skills'/>
                <div className={skillsStyle.skills}>
                    {skills}
                </div>
            </div>
        </section>
    );
}