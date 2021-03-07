import React from 'react';
import skillsStyle from './Skills.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Skill} from "./skill/Skill";

export function Skills() {
    return (
        <div className={skillsStyle.skillsBlock}>
            <div className={`${styleContainer.container} ${skillsStyle.skillsContainer}`}>
                <h2 className={skillsStyle.title}>Skills</h2>
                <div className={skillsStyle.skills}>
                    <Skill
                        title={'JS'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                    />
                    <Skill
                        title={'CSS'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                    />
                    <Skill
                        title={'React'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                    />
                </div>
            </div>
        </div>
    );
}