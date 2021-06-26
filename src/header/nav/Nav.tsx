import React from "react"
import {Link} from "react-scroll"
import style from "./Nav.module.scss"

export type NavType = {
    navLinks: Array<NavLinkType>
}

export type NavLinkType = {
    id: string
    sectionId: string
    navTitle: string
    offset: number,
    style: { marginTop: string }
}

export function Nav(props: NavType) {

    const navLinks = props.navLinks.map(navLink => {
        return (
            <Link key={navLink.id} to={navLink.sectionId} href="" spy={true} smooth={true}
                  offset={-50} duration={500} className={style.navLink}>{navLink.navTitle}
            </Link>
        )
    })

    return (
        <nav className={style.nav}>
            {navLinks}
        </nav>
    )
}