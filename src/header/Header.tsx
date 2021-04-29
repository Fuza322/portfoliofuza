import React from 'react';
import style from './Header.module.scss'
import {Nav} from "./nav/Nav";

export function Header() {
    return (
        <header className={style.headerBlock}>
            <div className={style.headerContainer}>
                <div className={style.header}>
                    <Nav/>
                </div>
            </div>
        </header>
    )
}