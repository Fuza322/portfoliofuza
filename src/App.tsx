import React from "react"
import {v1} from "uuid"
import {Header} from "./header/Header"
import {Main} from "./main/Main"
import {Skills} from "./skills/Skills"
import {Projects} from "./projects/Projects"
import {Contact} from "./contact/Contact"
import {Footer} from "./footer/Footer"
import {NavLinkType} from "./header/nav/Nav"
import {SkillType} from "./skills/skill/Skill"
import {ProjectType} from "./projects/project/Project"
import {FooterLinkType} from "./footer/link/FooterLink"
import mainPhoto from "./assets/images/main/mainPhoto.jpg"
import jsLogo from "./assets/images/skills/jsLogo.png"
import tsLogo from "./assets/images/skills/tsLogo.png"
import reactLogo from "./assets/images/skills/reactLogo.png"
import reduxLogo from "./assets/images/skills/reduxLogo.png"
import reduxToolkitLogo from "./assets/images/skills/reduxToolkitLogo.png"
import nodejsLogo from "./assets/images/skills/nodejsLogo.png"
import expressjsLogo from "./assets/images/skills/expressjsLogo.png"
import sqlLogo from "./assets/images/skills/sqlLogo.png"
import mongodbLogo from "./assets/images/skills/mongodbLogo.png"
import liquibaseLogo from "./assets/images/skills/liquibaseLogo.png"
import css3Logo from "./assets/images/skills/css3Logo.jpg"
import sassLogo from "./assets/images/skills/sassLogo.jpg"
import styledComponentsLogo from "./assets/images/skills/styledComponentsLogo.png"
import materialUiLogo from "./assets/images/skills/materialUiLogo.png"
import gitLogo from "./assets/images/skills/gitLogo.png"
import todolistImage from "./assets/images/projects/todolist.png"
import socialNetworkImage from "./assets/images/projects/socialNetwork.png"
import learnCardsImage from "./assets/images/projects/learnCards.png"
import circleBlackImage from "./assets/images/projects/circleBlack.png"

function App() {

    const navLinks: Array<NavLinkType> = [
        {
            id: v1(),
            sectionId: "mainId",
            navTitle: "Main",
            offset: 0,
            style: {marginTop: "0"}
        },
        {
            id: v1(),
            sectionId: "skillsId",
            navTitle: "Skills",
            offset: -35,
            style: {marginTop: "40px"}
        },
        {
            id: v1(),
            sectionId: "projectsId",
            navTitle: "Projects",
            offset: -35,
            style: {marginTop: "40px"}
        },
        {
            id: v1(),
            sectionId: "contactsId",
            navTitle: "Contacts",
            offset: -35,
            style: {marginTop: "40px"}
        }
    ]

    const skills: Array<SkillType> = [
        {
            id: v1(),
            skillTitle: "JavaScript",
            skillDescription: "Scripting programming language with dynamic typing that defines the behavior of a web application.",
            style: {backgroundImage: `url(${jsLogo})`}
        },
        {
            id: v1(),
            skillTitle: "TypeScript",
            skillDescription: "Programming language that is a web application development tool that solves typing problems and extends the capabilities of the JavaScript language.",
            style: {backgroundImage: `url(${tsLogo})`}
        },
        {
            id: v1(),
            skillTitle: "React",
            skillDescription: "Library for developing user interfaces and creating one-page applications using components and Virtual DOM.",
            style: {backgroundImage: `url(${reactLogo})`}
        },
        {
            id: v1(),
            skillTitle: "Redux",
            skillDescription: "Library for managing the state of the application using tools that allow you to build the architecture of a web application and greatly simplify the transfer of data.",
            style: {backgroundImage: `url(${reduxLogo})`}
        },
        {
            id: v1(),
            skillTitle: "Redux Toolkit",
            skillDescription: "Package that provides tools for setting up the repository and performing the most common operations, and also contains useful utilities to make development with Redux easier.",
            style: {backgroundImage: `url(${reduxToolkitLogo})`}
        },
        {
            id: v1(),
            skillTitle: "NodeJS",
            skillDescription: "Software platform based on the V8 engine (translating JavaScript into machine code).",
            style: {backgroundImage: `url(${nodejsLogo})`}
        },
        {
            id: v1(),
            skillTitle: "ExpressJS",
            skillDescription: "Framework that simplifies the creation of APIs and web applications using NodeJS..",
            style: {backgroundImage: `url(${expressjsLogo})`}
        },
        {
            id: v1(),
            skillTitle: "SQL",
            skillDescription: "Declarative programming language used to create, modify, and manipulate data in a relational database.",
            style: {backgroundImage: `url(${sqlLogo})`}
        },
        {
            id: v1(),
            skillTitle: "Liquibase",
            skillDescription: "Database-independent library for tracking, managing, and applying database schema changes.",
            style: {backgroundImage: `url(${liquibaseLogo})`}
        },
        {
            id: v1(),
            skillTitle: "MongoDB",
            skillDescription: "Document-oriented database management system that does not require a description of the table schema.",
            style: {backgroundImage: `url(${mongodbLogo})`}
        },
        {
            id: v1(),
            skillTitle: "CSS3",
            skillDescription: "Language for describing the appearance of a document written using a markup language.",
            style: {backgroundImage: `url(${css3Logo})`}
        },
        {
            id: v1(),
            skillTitle: "Sass",
            skillDescription: "Metalanguage required to increase the level of abstraction of CSS code and simplify cascading style sheet files.",
            style: {backgroundImage: `url(${sassLogo})`}
        },
        {
            id: v1(),
            skillTitle: "Styled-components",
            skillDescription: "Library that allows you to create styles directly in JS, customize them in various ways and use them as regular React components.",
            style: {backgroundImage: `url(${styledComponentsLogo})`}
        },
        {
            id: v1(),
            skillTitle: "Material-UI",
            skillDescription: "A library that contains a wide range of styled React components for quickly developing an application in React.",
            style: {backgroundImage: `url(${materialUiLogo})`}
        },
        {
            id: v1(),
            skillTitle: "Git",
            skillDescription: "Distributed version control system that allows you to create repositories to manage collaborative development and, if necessary, revert to earlier versions of the application.",
            style: {backgroundImage: `url(${gitLogo})`}
        }
    ]

    const projects: Array<ProjectType> = [
        {
            id: v1(),
            projectTitle: "TodoList",
            projectDescription: "Web application designed to conveniently structure information about all current tasks in one place.",
            stackTechnology: "TS, ReactJS, Redux-thunk, Axios, Formik, Material UI, Sass.",
            viewCodeLink: "https://github.com/Fuza322/TodoList",
            style: {backgroundImage: `url(${todolistImage})`}
        },
        {
            id: v1(),
            projectTitle: "Social network",
            projectDescription: "Web application that allows registered users to post information and communicate with each other.",
            stackTechnology: "TS, ReactJS, Redux-thunk, Axios, Redux-form, CSS.",
            viewCodeLink: "https://github.com/Fuza322/Social-Network",
            style: {backgroundImage: `url(${socialNetworkImage})`}
        },
        {
            id: v1(),
            projectTitle: "LearnCards",
            projectDescription: "Web application with flashcards that are used to effectively memorize and review the material studied.",
            stackTechnology: "TS, ReactJS, Redux-thunk, Axios, Formik, Material UI, Sass.",
            viewCodeLink: "https://github.com/Fuza322/LearnCards",
            style: {backgroundImage: `url(${learnCardsImage})`}
        },
        {
            id: v1(),
            projectTitle: "CircleBlack",
            projectDescription: "CircleBlack is integrated advisor hub, that delivers portfolio management and performance reporting.",
            stackTechnology: "JS, ReactJS, NodeJS, ExpressJS, MySQL, Liquibase, MongoDB",
            viewCodeLink: "https://circleblack.com/",
            style: {backgroundImage: `url(${circleBlackImage})`}
        },
    ]

    const footerLinks: Array<FooterLinkType> = [
        {id: v1(), linkTitle: "Telegram", link: "https://t.me/vanya_Fuza"},
        {id: v1(), linkTitle: "Linkedin", link: "https://www.linkedin.com/in/ivanosipik/"},
        {id: v1(), linkTitle: "GitHub", link: "https://github.com/Fuza322"},
        {id: v1(), linkTitle: "CodeWars", link: "https://www.codewars.com/users/Fuza322"}
    ]

    return (
        <div>
            <Header navLinks={navLinks}/>
            <Main style={{backgroundImage: `url(${mainPhoto})`}}/>
            <Skills skills={skills}/>
            <Projects projects={projects}/>
            <Contact/>
            <Footer footerLinks={footerLinks}/>
        </div>
    )
}

export default App
