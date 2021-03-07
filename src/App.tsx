import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}

export default App;
