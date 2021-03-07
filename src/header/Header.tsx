import React from 'react';
import headerStyle from './Header.module.css'
import {Nav} from "./nav/Nav";

export function Header() {
    return (
        <div className={headerStyle.header}>
            <Nav/>
        </div>
    )


}