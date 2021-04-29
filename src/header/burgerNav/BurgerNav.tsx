import React from 'react';
import {Link} from 'react-scroll'
import style from './BurgerNav.module.scss'

export function BurgerNav() {
    return (
        <nav className={style.burgerNav}>
            <div className={style.burgerNavItems}>
                <a className={style.navLink} href="#">Main</a>
                <Link className={style.navLink} to="skillsId" href="" spy={true} smooth={true} offset={0}
                      duration={500}>Skills</Link>
                <Link className={style.navLink} to="projectsId" href="" spy={true} smooth={true} offset={0}
                      duration={500}>Projects</Link>
                <Link className={style.navLink} to="contactsId" href="" spy={true} smooth={true} offset={0}
                      duration={500}>Сontacts</Link>
            </div>
            <div className={style.burgerButton}></div>
        </nav>
    )
}