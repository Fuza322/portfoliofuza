import React from 'react';
import style from './Footer.module.scss'
import {Link, LinkType} from "./link/Link";

export type FooterType = {
    links: Array<LinkType>
}

export function Footer(props: FooterType) {

    const links = props.links.map(link => {
        return (
            <Link
                key={link.id}
                id={link.id}
                linkTitle={link.linkTitle}
                link={link.link}
            />
        )
    })

    return (
        <footer className={style.footerBlock}>
            <div className={style.footerContainer}>
                <div className={style.divFooter}>
                    <ul className={style.footerLinks}>
                        {links}
                    </ul>
                </div>
            </div>
        </footer>
    )
}