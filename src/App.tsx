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
import nextLogo from "./assets/images/skills/nextLogo.png"
import reduxLogo from "./assets/images/skills/reduxLogo.png"
import reduxToolkitLogo from "./assets/images/skills/reduxToolkitLogo.png"
import mobxLogo from "./assets/images/skills/mobxLogo.png"
import nodeJsLogo from "./assets/images/skills/nodeJsLogo.png"
import expressJsLogo from "./assets/images/skills/expressJsLogo.png"
import sqlLogo from "./assets/images/skills/sqlLogo.png"
import mongodbLogo from "./assets/images/skills/mongodbLogo.png"
import liquibaseLogo from "./assets/images/skills/liquibaseLogo.png"
import css3Logo from "./assets/images/skills/css3Logo.jpg"
import sassLogo from "./assets/images/skills/sassLogo.jpg"
import lessLogo from "./assets/images/skills/lessLogo.png"
import tailwindLogo from "./assets/images/skills/tailwindLogo.png"
import styledComponentsLogo from "./assets/images/skills/styledComponentsLogo.png"
import materialUiLogo from "./assets/images/skills/materialUiLogo.png"
import threeJsLogo from "./assets/images/skills/threeJsLogo.png"
import pixiJsLogo from "./assets/images/skills/pixiJsLogo.png"
import gitLogo from "./assets/images/skills/gitLogo.png"
import taskTrackerImage from "./assets/images/projects/taskTracker.png"
import socialNetworkImage from "./assets/images/projects/socialNetwork.png"
import learnCardsImage from "./assets/images/projects/learnCards.png"
import circleBlackImage from "./assets/images/projects/circleBlack.png"
import evenBetImage from "./assets/images/projects/evenbet.jpg"
import wtVsEd from "./assets/images/projects/wtVsEd.png"

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
            skillDescription: "The scripting programming language with dynamic typing that defines the behavior of a web application.",
            style: {backgroundImage: `url(${jsLogo})`}
        },
        {
            id: v1(),
            skillTitle: "TypeScript",
            skillDescription: "The programming language that is a web application development tool that solves typing problems and extends the capabilities of the JavaScript language.",
            style: {backgroundImage: `url(${tsLogo})`}
        },
        {
            id: v1(),
            skillTitle: "React",
            skillDescription: "The library for developing user interfaces and creating one-page applications using components and Virtual DOM.",
            style: {backgroundImage: `url(${reactLogo})`}
        },
        {
            id: v1(),
            skillTitle: "Redux",
            skillDescription: "The library for managing the state of the application using tools that allow you to build the architecture of a web application and greatly simplify the transfer of data.",
            style: {backgroundImage: `url(${reduxLogo})`}
        },
        {
            id: v1(),
            skillTitle: "Next",
            skillDescription: "The open-source JavaScript framework built on top of React.js for building web applications by Vercel.",
            style: {backgroundImage: `url(${nextLogo})`}
        },
        {
            id: v1(),
            skillTitle: "Redux Toolkit",
            skillDescription: "The package that provides tools for setting up the repository and performing the most common operations, and also contains useful utilities to make development with Redux easier.",
            style: {backgroundImage: `url(${reduxToolkitLogo})`}
        },
        {
            id: v1(),
            skillTitle: "MobX",
            skillDescription: "The state management library that makes it easy to create reactive data models.",
            style: {backgroundImage: `url(${mobxLogo})`}
        },
        {
            id: v1(),
            skillTitle: "NodeJS",
            skillDescription: "The software platform based on the V8 engine (translating JavaScript into machine code).",
            style: {backgroundImage: `url(${nodeJsLogo})`}
        },
        {
            id: v1(),
            skillTitle: "ExpressJS",
            skillDescription: "The framework that simplifies the creation of APIs and web applications using NodeJS..",
            style: {backgroundImage: `url(${expressJsLogo})`}
        },
        {
            id: v1(),
            skillTitle: "SQL",
            skillDescription: "The declarative programming language used to create, modify, and manipulate data in a relational database.",
            style: {backgroundImage: `url(${sqlLogo})`}
        },
        {
            id: v1(),
            skillTitle: "Liquibase",
            skillDescription: "The database-independent library for tracking, managing, and applying database schema changes.",
            style: {backgroundImage: `url(${liquibaseLogo})`}
        },
        {
            id: v1(),
            skillTitle: "MongoDB",
            skillDescription: "The document-oriented database management system that does not require a description of the table schema.",
            style: {backgroundImage: `url(${mongodbLogo})`}
        },
        {
            id: v1(),
            skillTitle: "CSS3",
            skillDescription: "The language for describing the appearance of a document written using a markup language.",
            style: {backgroundImage: `url(${css3Logo})`}
        },
        {
            id: v1(),
            skillTitle: "Sass",
            skillDescription: "The metalanguage required to increase the level of abstraction of CSS code and simplify cascading style sheet.",
            style: {backgroundImage: `url(${sassLogo})`}
        },
        {
            id: v1(),
            skillTitle: "Less",
            skillDescription: "The preprocessor and embedded metalanguage that transforms and improves the cascading style sheet experience.",
            style: {backgroundImage: `url(${lessLogo})`}
        },
        {
            id: v1(),
            skillTitle: "Tailwind",
            skillDescription: "The open-source CSS framework that provides special utility classes that can be combined to style each element to quickly create modern websites.",
            style: {backgroundImage: `url(${tailwindLogo})`}
        },
        {
            id: v1(),
            skillTitle: "Styled-components",
            skillDescription: "The library that allows you to create styles directly in JS, customize them in various ways and use them as regular React components.",
            style: {backgroundImage: `url(${styledComponentsLogo})`}
        },
        {
            id: v1(),
            skillTitle: "Material-UI",
            skillDescription: "The library that contains a wide range of styled React components for quickly developing an application in React.",
            style: {backgroundImage: `url(${materialUiLogo})`}
        },
        {
            id: v1(),
            skillTitle: "ThreeJS",
            skillDescription: "The cross-browser JavaScript library that helps to create animated 3D computer graphics when developing web applications. Three.js scripts can be used with CANVAS, SVG, or WebGL elements.",
            style: {backgroundImage: `url(${threeJsLogo})`}
        },
        {
            id: v1(),
            skillTitle: "PixiJS",
            skillDescription: "The JavaScript library for creating 2D graphics and animations for web applications. It provides high performance and the ability to work with various visual effects.",
            style: {backgroundImage: `url(${pixiJsLogo})`}
        },
        {
            id: v1(),
            skillTitle: "Git",
            skillDescription: "The distributed version control system that allows you to create repositories to manage collaborative development and, if necessary, revert to earlier versions of the application.",
            style: {backgroundImage: `url(${gitLogo})`}
        }
    ]

    const projects: Array<ProjectType> = [
        {
            id: v1(),
            projectTitle: "Task Tracker",
            projectDescription: "Web application designed to conveniently structure information about all current tasks in one place.",
            stackTechnology: "TypeScript, React, Redux-thunk, Axios, Formik, Material UI, Sass.",
            viewLink: "https://github.com/Fuza322/Task Tracker",
            style: {backgroundImage: `url(${taskTrackerImage})`}
        },
        {
            id: v1(),
            projectTitle: "Social network",
            projectDescription: "Web application that allows registered users to post information and communicate with each other.",
            stackTechnology: "TypeScript, React, Redux-thunk, Axios, Redux-form, CSS.",
            viewLink: "https://github.com/Fuza322/Social-Network",
            style: {backgroundImage: `url(${socialNetworkImage})`}
        },
        {
            id: v1(),
            projectTitle: "LearnCards",
            projectDescription: "Web application with flashcards that are used to effectively memorize and review the material studied.",
            stackTechnology: "TypeScript, React, NodeJS, Redux-thunk, Formik, Material UI, Sass.",
            viewLink: "https://github.com/Fuza322/LearnCards",
            style: {backgroundImage: `url(${learnCardsImage})`}
        },
        {
            id: v1(),
            projectTitle: "CircleBlack",
            projectDescription: "CircleBlack is integrated advisor hub, that delivers portfolio management and performance reporting.",
            stackTechnology: "JavaScript, React, NodeJS, ExpressJS, MySQL, Liquibase, MongoDB.",
            viewLink: "https://circleblack.com",
            style: {backgroundImage: `url(${circleBlackImage})`}
        },
        {
            id: v1(),
            projectTitle: "Evenbet Poker",
            projectDescription: "Evenbet Poker is an online poker application that is used to play various types of poker games, tournaments and various casino games such as slots, roulette, blackjack and others.",
            stackTechnology: "JavaScript, TypeScript, React, Redux, MVC, Less.",
            viewLink: "https://poker.evenbetpoker.com/html5-evenbetpoker",
            style: {backgroundImage: `url(${evenBetImage})`}
        },
        {
            id: v1(),
            projectTitle: "West Tiger vs East Dragon",
            projectDescription: "The web application for the game \"coin toss\". The player makes a bet and tosses a coin - if the winning side comes up, he gets double the amount, otherwise he loses the bet.",
            stackTechnology: "TypeScript, Next, Redux, TailwindCSS, ThreeJS, PixiJS.",
            viewLink: "https://bgmprod.arkana-gaming.com/en/wt-vs-ed",
            style: {backgroundImage: `url(${wtVsEd})`}
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
