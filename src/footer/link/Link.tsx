import React from 'react';
import linkStyle from './Link.module.css'
import {LinkType} from "../../App";


export function Link(props: LinkType) {
    return (
        <li className={linkStyle.link}>
            <a href="#">{props.linkTitle}</a>
        </li>
    )
}