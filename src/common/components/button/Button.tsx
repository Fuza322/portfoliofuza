import React from 'react'
import style from './Button.module.scss'

export type ButtonType = {
    title: string
}

export function Button(props: ButtonType) {
    return (
        <a href="" className={style.button}>{props.title}</a>
    )
}