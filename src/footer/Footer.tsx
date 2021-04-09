import React from 'react';
import footerStyle from './Footer.module.scss'
import style from "../common/styles/Common.module.css";
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
            />
        )
    })

    return (
        <footer className={footerStyle.footerBlock}>
            <div className={`${style.container} ${footerStyle.footerContainer}`}>
                <div className={footerStyle.divFooter}>
                    <div className={footerStyle.divFooterTitle}>
                        <a href="">
                            <h2 className={footerStyle.footerTitle}>Osipik Ivan</h2>
                        </a>
                    </div>
                    <ul className={footerStyle.footerLinks}>
                        {links}
                    </ul>
                </div>
            </div>
        </footer>
    )
}