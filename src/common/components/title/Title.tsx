import React from 'react';
import titleStype from './Title.module.scss'

export type TitleType = {
    title: string
}

export function Title(props: TitleType) {
    return (
        <div className={titleStype.divTitle}>
            <h2 className={titleStype.title}>{props.title}</h2>
        </div>
    )
}