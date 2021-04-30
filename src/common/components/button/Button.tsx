import React from 'react'
import style from './Button.module.scss'

export type ButtonType = {
    title: string
    link: string
}

export function Button(props: ButtonType) {
    return (
        <a href={props.link} target={'_blank'} className={style.button}>{props.title}</a>
    )
}