import React, { useState } from 'react';
import {Link} from 'react-scroll'
import style from './BurgerNav.module.scss'

export function BurgerNav() {

    const [burgerStatus, setNavBurgerStatus] = useState<boolean>(false)

    const onBurgerNavButtonClickHandler = () => {
        let burgerStatusCopy = !burgerStatus
        setNavBurgerStatus(burgerStatusCopy)
    }

    return (
        <nav className={style.burgerNav}>
            <div className={burgerStatus? `${style.burgerNavItems} ${style.showBurger}`: style.burgerNavItems}>
                <a className={style.navLink} href="#">Main</a>
                <Link className={style.navLink} to="skillsId" href="" spy={true} smooth={true} offset={0}
                      duration={500}>Skills</Link>
                <Link className={style.navLink} to="projectsId" href="" spy={true} smooth={true} offset={0}
                      duration={500}>Projects</Link>
                <Link className={style.navLink} to="contactsId" href="" spy={true} smooth={true} offset={0}
                      duration={500}>Сontacts</Link>
            </div>
            <div className={style.burgerButton} onClick={onBurgerNavButtonClickHandler}></div>
        </nav>
    )
}