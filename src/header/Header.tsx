import React from 'react';
import style from './Header.module.scss'
import {Nav} from "./nav/Nav";
import {BurgerNav} from "./burgerNav/BurgerNav";

export function Header() {
    return (
        <header id={'mainId'} className={style.headerBlock}>
            <div className={style.headerContainer}>
                <div className={style.header}>
                    <Nav/>
                    <BurgerNav/>
                </div>
            </div>
        </header>
    )
}