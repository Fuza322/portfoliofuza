import React from 'react';
import headerStyle from './Header.module.css'
import {Nav} from "./nav/Nav";

export function Header() {
    return (
        <div className={headerStyle.header}>
            <div className={headerStyle.divHeader}>
                <div className={headerStyle.headerLogo}>
                </div>
                <Nav/>
            </div>
        </div>
    )
}