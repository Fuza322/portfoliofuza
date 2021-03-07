import React from 'react';
import navStyle from './Nav.module.css'

export function Nav() {
    return(
        <div className={navStyle.nav}>
            <a href="href">Main</a>
            <a href="href">Skills</a>
            <a href="href">Projects</a>
            <a href="href">Сontacts</a>
        </div>
    )
}