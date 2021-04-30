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
import mainPhoto from './assetts/images/main/mainPhoto.jpg'
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

function App() {

    const skills: Array<SkillType> = [
        {
            id: '1s',
            skillTitle: 'HTML5',
            skillDiscription: 'Special language used to create markup for a web application.',
            style: {backgroundImage: `url(${html5Logo})`}
        },
        {
            id: '2s',
            skillTitle: 'CSS3',
            skillDiscription: 'Language for describing the appearance of a document written using a markup language.',
            style: {backgroundImage: `url(${css3Logo})`}
        },
        {
            id: '3s',
            skillTitle: 'Sass',
            skillDiscription: 'Мetalanguage required to increase the level of abstraction of CSS code and simplify cascading style sheet files.',
            style: {backgroundImage: `url(${sassLogo})`}
        },
        {
            id: '4s',
            skillTitle: 'JavaScript',
            skillDiscription: 'Scripting programming language with dynamic typing that defines the behavior of a web application.',
            style: {backgroundImage: `url(${jsLogo})`}
        },
        {
            id: '5s',
            skillTitle: 'TypeScript',
            skillDiscription: 'Programming language that is a web application development tool that solves typing problems and extends the capabilities of the JavaScript language.',
            style: {backgroundImage: `url(${tsLogo})`}
        },
        {
            id: '6s',
            skillTitle: 'React',
            skillDiscription: 'Library for developing user interfaces and creating one-page applications using components and Virtual DOM.',
            style: {backgroundImage: `url(${reactLogo})`}
        },
        {
            id: '7s',
            skillTitle: 'Redux',
            skillDiscription: 'Library for managing the state of the application using tools that allow you to build the architecture of a web application and greatly simplify the transfer of data.',
            style: {backgroundImage: `url(${reduxLogo})`}
        },
        {
            id: '8s',
            skillTitle: 'Storybook',
            skillDiscription: 'Tool for creating separate parts of the interface separately from the main application, which simplifies testing and allows you to debug a component with different data.',
            style: {backgroundImage: `url(${storybookLogo})`}
        },
        {
            id: '9s',
            skillTitle: 'Git',
            skillDiscription: 'Distributed version control system that allows you to create repositories to manage collaborative development and, if necessary, revert to earlier versions of the application.',
            style: {backgroundImage: `url(${gitLogo})`}
        },
    ]

    const projects: Array<ProjectType> = [
        {
            id: '1p',
            projectName: 'TodoList',
            projectDescription: 'Web application designed to conveniently structure information about all current tasks in one place.',
            stackTechonogy: 'ReactJS, TS, Redux-thunk, Axios, Formik, Material UI, Storybook.',
            viewCodeLink: 'https://github.com/Fuza322/IT-Incubator-ToDoList',
            style: {backgroundImage: `url(${todolistImage})`}
        },
        {
            id: '2p',
            projectName: 'Social network',
            projectDescription: 'Web application that allows registered users to post information and communicate with each other.',
            stackTechonogy: 'ReactJS, TS, Redux-thunk, Axios, Redux-form, CSS.',
            viewCodeLink: 'https://github.com/Fuza322/IT-Incubator-Social-Network',
            style: {backgroundImage: `url(${socialNetworkImage})`}
        }
    ]

    const links: Array<LinkType> = [
        {id: '1l', linkTitle: 'Telegram', link: 'https://t.me/vanya_Fuza'},
        {id: '2l', linkTitle: 'Linkedin', link: 'https://www.linkedin.com/in/ivanosipik/'},
        {id: '3l', linkTitle: 'GitHub', link: 'https://github.com/Fuza322'},
        {id: '4l', linkTitle: 'G-mail', link: 'mailto:vanya.osipik322@gmail.com'},
    ]

    return (
        <div>
            <Header/>
            <Main style={{backgroundImage: `url(${mainPhoto})`}}/>
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
