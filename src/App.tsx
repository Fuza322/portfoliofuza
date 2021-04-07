import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Contact} from "./contact/Contact";
import {Footer} from "./footer/Footer";

// npm run deploy

export type SkillsType = {
    skills: Array<SkillType>
}

export type SkillType = {
    id: string,
    skillTitle: string,
    skillDiscription: string
}

export type ProjectsType = {
    projects: Array<ProjectType>
}

export type ProjectType = {
    id: string
    projectName: string,
    projectDescription: string
}

export type FooterType = {
    links: Array<LinkType>
}

export type LinkType = {
    id: string,
    linkTitle: string
}

function App() {

    const skills: Array<SkillType> = [
        {id: '1s', skillTitle: 'JavaScript', skillDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: '2s', skillTitle: 'React', skillDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: '3s', skillTitle: 'CSS', skillDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: '3s', skillTitle: 'CSS', skillDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: '3s', skillTitle: 'CSS', skillDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: '3s', skillTitle: 'CSS', skillDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]

    const projects: Array<ProjectType> = [
        {id: '1p', projectName: 'TodoList', projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: '1p', projectName: 'TodoList', projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: '2p', projectName: 'Social Network', projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]

    const links: Array<LinkType> = [
        {id: '1l', linkTitle: 'G-Mail'},
        {id: '2l', linkTitle: 'GitHub'},
        {id: '3l', linkTitle: 'Linkedin'},
        {id: '4l', linkTitle: 'Telegram'},
    ]

    return (
        <div>
            <Header/>
            <Main/>
            <Skills
                skills={skills}
            />
            <Projects
                projects={projects}
            />
            <Contact/>
            <Footer
                links={links}
            />
        </div>
    );
}

export default App;
