import React from 'react';
import skillsStyle from './Skills.module.css'
import style from "../common/styles/Common.module.css";
import {Skill} from "./skill/Skill";
import {SkillsType} from '../App';

export function Skills(props: SkillsType) {

    const skills = props.skills.map(skill => {
        return (
            <Skill
                key={skill.id}
                id={skill.id}
                skillTitle={skill.skillTitle}
                skillDiscription={skill.skillDiscription}
            />
        )
    })

    return (
        <section className={skillsStyle.skillsBlock}>
            <div className={`${style.container} ${skillsStyle.skillsContainer}`}>
                <div className={skillsStyle.divSkillsTitle}>
                    <h2 className={style.sectionTitle}>Skills</h2>
                </div>
                <div className={skillsStyle.skills}>
                    {skills}
                </div>
            </div>
        </section>
    );
}