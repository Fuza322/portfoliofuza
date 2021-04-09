import React from 'react';
import headerStyle from './Header.module.scss'
import {Nav} from "./nav/Nav";

export function Header() {
    return (
        <header className={headerStyle.headerBlock}>
            <div className={headerStyle.headerContainer}>
                <div className={headerStyle.header}>
                    <Nav/>
                </div>
            </div>
        </header>
    )
}