import React from "react"
import {FooterLink, FooterLinkType} from "./link/FooterLink"
import style from "./Footer.module.scss"

export type FooterType = {
    footerLinks: Array<FooterLinkType>
}

export function Footer(props: FooterType) {

    const footerLinks = props.footerLinks.map(footerLink => {
        return (
            <FooterLink
                key={footerLink.id}
                id={footerLink.id}
                linkTitle={footerLink.linkTitle}
                link={footerLink.link}
            />
        )
    })

    return (
        <footer className={style.footerBlock}>
            <div className={style.footerContainer}>
                <div className={style.divFooter}>
                    <ul className={style.footerLinks}>
                        {footerLinks}
                    </ul>
                </div>
            </div>
        </footer>
    )
}