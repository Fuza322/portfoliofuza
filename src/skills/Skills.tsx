import React from 'react';
import skillsStyle from './Skills.module.css'
import styleContainer from "../common/styles/Container.module.css";
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
        <div className={skillsStyle.skillsBlock}>
            <div className={`${styleContainer.container} ${skillsStyle.skillsContainer}`}>
                <h2 className={skillsStyle.skillsTitle}>Skills</h2>
                <div className={skillsStyle.skills}>
                    {skills}
                </div>
            </div>
        </div>
    );
}