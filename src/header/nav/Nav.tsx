import React from 'react';
import style from './Nav.module.scss'

export function Nav() {
    return(
        <div className={style.nav}>
            <a className={style.navLink} href="#">Main</a>
            <a className={style.navLink} href="#">Skills</a>
            <a className={style.navLink} href="#">Projects</a>
            <a className={style.navLink} href="#">Сontacts</a>
        </div>
    )
}