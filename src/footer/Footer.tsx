import React from 'react';
import footerStyle from './Footer.module.css'
import styleContainer from "../common/styles/Common.module.css";
import {Link} from "./link/Link";
import {FooterType} from '../App';

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
            <div className={`${styleContainer.container} ${footerStyle.footerContainer}`}>
                <div className={footerStyle.divFooter}>
                    <div className={footerStyle.divFooterTitle}>
                        <h2 className={footerStyle.footerTitle}>Osipik Ivan</h2>
                    </div>
                    <ul className={footerStyle.footerLinks}>
                        {links}
                    </ul>
                    <p className={footerStyle.footerRights}>
                        © 2020, All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}