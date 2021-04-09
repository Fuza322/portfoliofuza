import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Contact} from "./contact/Contact";
import {Footer} from "./footer/Footer";
import {SkillType} from './skills/skill/Skill';
import {ProjectType} from './projects/project/Project';
import {LinkType} from './footer/link/Link';
import html5 from './assetts/images/skills/html5Logo.png'
import css3 from './assetts/images/skills/css3Logo.jpg'
import js from './assetts/images/skills/jsLogo.png'
import todolist from './assetts/images/projects/todolist.png'
import socialNetwork from './assetts/images/projects/socialNetwork.png'

// npm run deploy

function App() {

    const skills: Array<SkillType> = [
        {
            id: '1s',
            skillTitle: 'HTML5',
            skillDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            style: {backgroundImage: `url(${html5})`}
        },
        {
            id: '2s',
            skillTitle: 'CSS3',
            skillDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            style: {backgroundImage: `url(${css3})`}
        },
        {
            id: '3s',
            skillTitle: 'JavaScript',
            skillDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            style: {backgroundImage: `url(${js})`}
        },
    ]

    const projects: Array<ProjectType> = [
        {
            id: '1p',
            projectName: 'TodoList',
            projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            style: {backgroundImage: `url(${todolist})`}
        },
        {
            id: '2p',
            projectName: 'Social network',
            projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            style: {backgroundImage: `url(${socialNetwork})`}
        }
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
