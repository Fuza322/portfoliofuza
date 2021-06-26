import React from "react"
import style from "./FooterLink.module.scss"

export type FooterLinkType = {
    id: string,
    linkTitle: string
    link: string
}

export function FooterLink(props: FooterLinkType) {
    return (
        <li className={style.link}>
            <a href={props.link} target={"_blank"} rel="noreferrer" className={style.linkText}>{props.linkTitle}</a>
        </li>
    )
}