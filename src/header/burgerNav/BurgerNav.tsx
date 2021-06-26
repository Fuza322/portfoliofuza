import React, {useState} from "react"
import {Link} from "react-scroll"
import {NavLinkType} from "../nav/Nav"
import burgerNavButton from "../../assets/images/burgerNavButton/burgerNavButton.png"
import style from "./BurgerNav.module.scss"

export type BurgerNavType = {
    navLinks: Array<NavLinkType>
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

    const burgerNavLinks = props.navLinks.map(burgerNavLink => {
        return (
            <Link key={burgerNavLink.id} onClick={onBurgerNavCloseHandler} to={burgerNavLink.sectionId} href="" spy={true}
                  smooth={true} offset={burgerNavLink.offset} duration={500} className={style.burgerNavLink} style={burgerNavLink.style}>{burgerNavLink.navTitle}</Link>
        )
    })

    return (
        <nav className={style.burgerNav}>
            <div className={burgerStatus ? `${style.burgerNavItems} ${style.showBurger}` : style.burgerNavItems}>
                {burgerNavLinks}
            </div>
            <div className={style.burgerButton} style={{backgroundImage: `url(${burgerNavButton})`}}
                 onClick={onBurgerNavButtonClickHandler}></div>
        </nav>
    )
}