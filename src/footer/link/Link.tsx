import React from 'react';
import style from './Link.module.scss'

export type LinkType = {
    id: string,
    linkTitle: string
    link: string
}

export function Link(props: LinkType) {
    return (
        <li className={style.link}>
            <a href={props.link} target={'_blank'} className={style.linkText} >{props.linkTitle}</a>
        </li>
    )
}