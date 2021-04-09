import React from 'react';
import linkStyle from './Link.module.scss'

export type LinkType = {
    id: string,
    linkTitle: string
}

export function Link(props: LinkType) {
    return (
        <li className={linkStyle.link}>
            <a className={linkStyle.linkText} href="#">{props.linkTitle}</a>
        </li>
    )
}