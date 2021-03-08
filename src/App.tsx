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

function App() {

    let skills: Array<SkillType> = [
        {id: '1', skillTitle: 'JavaScript', skillDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: '2', skillTitle: 'React', skillDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: '3', skillTitle: 'CSS', skillDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]

    return (
        <div>
            <Header/>
            <Main/>
            <Skills
                skills={skills}
            />
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
