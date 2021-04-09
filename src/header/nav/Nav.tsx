import React from 'react';
import navStyle from './Nav.module.scss'

export function Nav() {
    return(
        <div className={navStyle.nav}>
            <a className={navStyle.navLink} href="#">Main</a>
            <a className={navStyle.navLink} href="#">Skills</a>
            <a className={navStyle.navLink} href="#">Projects</a>
            <a className={navStyle.navLink} href="#">Сontacts</a>
        </div>
    )
}