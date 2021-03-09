import React from 'react';
import navStyle from './Nav.module.css'

export function Nav() {
    return(
        <div className={navStyle.nav}>
            <a href="#">Main</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Сontacts</a>
        </div>
    )
}