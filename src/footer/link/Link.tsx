import React from 'react';
import linkStyle from './Link.module.css'


export function Link() {
    return (
        <li className={linkStyle.link}>
            <a href="#">Test_Link</a>
        </li>
    )
}