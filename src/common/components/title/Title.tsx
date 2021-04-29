import React from 'react';
import stype from './Title.module.scss'

export type TitleType = {
    title: string
}

export function Title(props: TitleType) {
    return (
        <div className={stype.divTitle}>
            <h2 className={stype.title}>{props.title}</h2>
        </div>
    )
}