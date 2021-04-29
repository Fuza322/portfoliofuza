import React from 'react';
import style from './Link.module.scss'

export type LinkType = {
    id: string,
    linkTitle: string
}

export function Link(props: LinkType) {
    return (
        <li className={style.link}>
            <a className={style.linkText} href="#">{props.linkTitle}</a>
        </li>
    )
}