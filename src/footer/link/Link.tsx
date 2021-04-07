import React from 'react';
import linkStyle from './Link.module.css'

export type LinkType = {
    id: string,
    linkTitle: string
}

export function Link(props: LinkType) {
    return (
        <li className={linkStyle.link}>
            <a href="#">{props.linkTitle}</a>
        </li>
    )
}