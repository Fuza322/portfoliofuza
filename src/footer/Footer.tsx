import React from 'react';
import footerStyle from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Link} from "./link/Link";

export function Footer() {
    return (
        <div className={footerStyle.footerBlock}>
            <div className={`${styleContainer.container} ${footerStyle.footerContainer}`}>
                <div className={footerStyle.divFooter}>
                    <h2 className={footerStyle.footerTitle}>Osipik Ivan</h2>
                    <ul className={footerStyle.footerLinks}>
                        <Link/>
                        <Link/>
                        <Link/>
                        <Link/>
                    </ul>
                    <p className={footerStyle.footerRights}>
                        © 2020, All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}