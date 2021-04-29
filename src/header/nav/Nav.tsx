import React from 'react';
import {Link} from 'react-scroll'
import style from './Nav.module.scss'

export function Nav() {
    return(
        <nav className={style.nav}>
            <a className={style.navLink} href="#">Main</a>
            <Link className={style.navLink} to="skillsId" href="" spy={true} smooth={true} offset={0} duration={500}>Skills</Link>
            <Link className={style.navLink} to="projectsId" href="" spy={true} smooth={true} offset={0} duration={500}>Projects</Link>
            <Link className={style.navLink} to="contactsId" href="" spy={true} smooth={true} offset={0} duration={500}>Сontacts</Link>
        </nav>
    )
}