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
import html5Logo from './assetts/images/skills/html5Logo.png'
import css3Logo from './assetts/images/skills/css3Logo.jpg'
import jsLogo from './assetts/images/skills/jsLogo.png'
import tsLogo from './assetts/images/skills/tsLogo.png'
import reactLogo from './assetts/images/skills/reactLogo.png'
import reduxLogo from './assetts/images/skills/reduxLogo.png'
import storybookLogo from './assetts/images/skills/storybookLogo.png'
import sassLogo from './assetts/images/skills/sassLogo.jpg'
import gitLogo from './assetts/images/skills/gitLogo.png'
import todolistImage from './assetts/images/projects/todolist.png'
import socialNetworkImage from './assetts/images/projects/socialNetwork.png'

// npm run deploy

function App() {

    const skills: Array<SkillType> = [
        {
            id: '1s',
            skillTitle: 'HTML5',
            skillDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            style: {backgroundImage: `url(${html5Logo})`}
        },
        {
            id: '2s',
            skillTitle: 'CSS3',
            skillDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            style: {backgroundImage: `url(${css3Logo})`}
        },
        {
            id: '3s',
            skillTitle: 'JavaScript',
            skillDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            style: {backgroundImage: `url(${jsLogo})`}
        },
        {
            id: '4s',
            skillTitle: 'TypeScript',
            skillDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            style: {backgroundImage: `url(${tsLogo})`}
        },
        {
            id: '5s',
            skillTitle: 'React',
            skillDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            style: {backgroundImage: `url(${reactLogo})`}
        },
        {
            id: '6s',
            skillTitle: 'Redux',
            skillDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            style: {backgroundImage: `url(${reduxLogo})`}
        },
        {
            id: '7s',
            skillTitle: 'Storybook',
            skillDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            style: {backgroundImage: `url(${storybookLogo})`}
        },
        {
            id: '8s',
            skillTitle: 'Sass',
            skillDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            style: {backgroundImage: `url(${sassLogo})`}
        },
        {
            id: '9s',
            skillTitle: 'Git',
            skillDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            style: {backgroundImage: `url(${gitLogo})`}
        },
    ]

    const projects: Array<ProjectType> = [
        {
            id: '1p',
            projectName: 'TodoList',
            projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            style: {backgroundImage: `url(${todolistImage})`}
        },
        {
            id: '2p',
            projectName: 'Social network',
            projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            style: {backgroundImage: `url(${socialNetworkImage})`}
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
