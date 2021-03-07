import React from 'react';
import projectsStyle from './Projects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";

export function Projects() {
    return (
        <div className={projectsStyle.projectsBlock}>
            <div className={`${styleContainer.container} ${projectsStyle.projectsContainer}`}>
                <h2 className={projectsStyle.projectsTitle}>Projects</h2>
                <div className={projectsStyle.projects}>
                    <Project
                        projectName={'Project_Name1'}
                        projectDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                    />
                    <Project
                        projectName={'Project_Name2'}
                        projectDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                    />
                </div>
            </div>
        </div>
    )
}