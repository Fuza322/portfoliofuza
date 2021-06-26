import React from "react"
import {Nav, NavLinkType} from "./nav/Nav"
import {BurgerNav} from "./burgerNav/BurgerNav"
import style from "./Header.module.scss"

type HeaderType = {
    navLinks: Array<NavLinkType>
}

export function Header(props: HeaderType) {
    return (
        <header id={"mainId"} className={style.headerBlock}>
            <div className={style.headerContainer}>
                <div className={style.header}>
                    <Nav
                        navLinks={props.navLinks}
                    />
                    <BurgerNav
                        navLinks={props.navLinks}
                    />
                </div>
            </div>
        </header>
    )
}