import React from 'react'
import buttonStyle from './Button.module.scss'

export type ButtonType = {
    title: string
}

export function Button(props: ButtonType) {
    return (
        <a href="" className={`${buttonStyle.linkButton}`}>
            <div className={`${buttonStyle.button}`}>{props.title}</div>
        </a>
    )
}