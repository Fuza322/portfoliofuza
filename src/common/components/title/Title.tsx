import React from 'react';
import titleStype from './Title.module.css'

export type TitleType = {
    title: string
}

export function Title(props: TitleType) {
    return (
        <div className={titleStype.divSectionTitle}>
            <h2 className={titleStype.sectionTitle}>{props.title}</h2>
        </div>
    )
}