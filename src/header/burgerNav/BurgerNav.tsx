import React, {useState} from 'react';
import {Link} from 'react-scroll'
import style from './BurgerNav.module.scss'

export type BurgerNavType = {
    style: { backgroundImage: string }
}

export function BurgerNav(props: BurgerNavType) {

    const [burgerStatus, setNavBurgerStatus] = useState<boolean>(false)

    const onBurgerNavButtonClickHandler = () => {
        const burgerStatusCopy = !burgerStatus
        setNavBurgerStatus(burgerStatusCopy)
    }

    const onBurgerNavCloseHandler = () => {
        setNavBurgerStatus(false)
    }

    return (
        <nav className={style.burgerNav}>
            <div className={burgerStatus ? `${style.burgerNavItems} ${style.showBurger}` : style.burgerNavItems}>
                <Link onClick={onBurgerNavCloseHandler} className={style.burgerNavLink} to="mainId" href="" spy={true} smooth={true} offset={0} duration={500}>Main</Link>
                <Link onClick={onBurgerNavCloseHandler} className={style.burgerNavLink} to="skillsId" href="" spy={true} smooth={true} offset={-35} duration={500}>Skills</Link>
                <Link onClick={onBurgerNavCloseHandler} className={style.burgerNavLink} to="projectsId" href="" spy={true} smooth={true} offset={-35} duration={500}>Projects</Link>
                <Link onClick={onBurgerNavCloseHandler} className={style.burgerNavLink} to="contactsId" href="" spy={true} smooth={true} offset={-35} duration={500}>Сontacts</Link>
            </div>
            <div className={style.burgerButton} style={props.style} onClick={onBurgerNavButtonClickHandler}></div>
        </nav>
    )
}