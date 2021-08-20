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
import html5Logo from "./assets/images/skills/html5Logo.png"
import css3Logo from "./assets/images/skills/css3Logo.jpg"
import jsLogo from "./assets/images/skills/jsLogo.png"
import tsLogo from "./assets/images/skills/tsLogo.png"
import reactLogo from "./assets/images/skills/reactLogo.png"
import reduxLogo from "./assets/images/skills/reduxLogo.png"
import storybookLogo from "./assets/images/skills/storybookLogo.png"
import sassLogo from "./assets/images/skills/sassLogo.jpg"
import gitLogo from "./assets/images/skills/gitLogo.png"
import todolistImage from "./assets/images/projects/todolist.png"
import socialNetworkImage from "./assets/images/projects/socialNetwork.png"
import learnCardsImage from "./assets/images/projects/learnCards.png"

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
            skillTitle: "HTML5",
            skillDiscription: "Special language used to create markup for a web application.",
            style: {backgroundImage: `url(${html5Logo})`}
        },
        {
            id: v1(),
            skillTitle: "CSS3",
            skillDiscription: "Language for describing the appearance of a document written using a markup language.",
            style: {backgroundImage: `url(${css3Logo})`}
        },
        {
            id: v1(),
            skillTitle: "Sass",
            skillDiscription: "Мetalanguage required to increase the level of abstraction of CSS code and simplify cascading style sheet files.",
            style: {backgroundImage: `url(${sassLogo})`}
        },
        {
            id: v1(),
            skillTitle: "JavaScript",
            skillDiscription: "Scripting programming language with dynamic typing that defines the behavior of a web application.",
            style: {backgroundImage: `url(${jsLogo})`}
        },
        {
            id: v1(),
            skillTitle: "TypeScript",
            skillDiscription: "Programming language that is a web application development tool that solves typing problems and extends the capabilities of the JavaScript language.",
            style: {backgroundImage: `url(${tsLogo})`}
        },
        {
            id: v1(),
            skillTitle: "React",
            skillDiscription: "Library for developing user interfaces and creating one-page applications using components and Virtual DOM.",
            style: {backgroundImage: `url(${reactLogo})`}
        },
        {
            id: v1(),
            skillTitle: "Redux",
            skillDiscription: "Library for managing the state of the application using tools that allow you to build the architecture of a web application and greatly simplify the transfer of data.",
            style: {backgroundImage: `url(${reduxLogo})`}
        },
        {
            id: v1(),
            skillTitle: "Storybook",
            skillDiscription: "Tool for creating separate parts of the interface separately from the main application, which simplifies testing and allows you to debug a component with different data.",
            style: {backgroundImage: `url(${storybookLogo})`}
        },
        {
            id: v1(),
            skillTitle: "Git",
            skillDiscription: "Distributed version control system that allows you to create repositories to manage collaborative development and, if necessary, revert to earlier versions of the application.",
            style: {backgroundImage: `url(${gitLogo})`}
        }
    ]

    const projects: Array<ProjectType> = [
        {
            id: v1(),
            projectTitle: "TodoList",
            projectDescription: "Web application designed to conveniently structure information about all current tasks in one place.",
            stackTechonogy: "ReactJS, TS, Redux-thunk, Axios, Formik, Material UI, Sass.",
            viewCodeLink: "https://github.com/Fuza322/TodoList",
            style: {backgroundImage: `url(${todolistImage})`}
        },
        {
            id: v1(),
            projectTitle: "Social network",
            projectDescription: "Web application that allows registered users to post information and communicate with each other.",
            stackTechonogy: "ReactJS, TS, Redux-thunk, Axios, Redux-form, CSS.",
            viewCodeLink: "https://github.com/Fuza322/Social-Network",
            style: {backgroundImage: `url(${socialNetworkImage})`}
        },
        {
            id: v1(),
            projectTitle: "LearnCards",
            projectDescription: "Web application with flashcards that are used to effectively memorize and review the material studied.",
            stackTechonogy: "ReactJS, TS, Redux-thunk, Axios, Formik, Material UI, Sass.",
            viewCodeLink: "https://github.com/Fuza322/LearnCards",
            style: {backgroundImage: `url(${learnCardsImage})`}
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
            <Header
                navLinks={navLinks}
            />
            <Main style={{backgroundImage: `url(${mainPhoto})`}}/>
            <Skills
                skills={skills}
            />
            <Projects
                projects={projects}
            />
            <Contact/>
            <Footer
                footerLinks={footerLinks}
            />
        </div>
    )
}

export default App