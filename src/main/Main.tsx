import React from 'react';
import mainStyle from './Main.module.scss'
import style from '../common/styles/Common.module.css'

export type MainType = {
    style: { backgroundImage: string }
}


export function Main(props: MainType) {
    return (
        <section className={mainStyle.mainBlock}>
            <div className={`${style.container} ${mainStyle.mainContainer}`}>
                <div className={mainStyle.mainText}>
                    <h1 className={mainStyle.mainNameText}>I'm Ivan Osipik.</h1>
                    <p className={mainStyle.mainPositionText}>Front-end developer (React)</p>
                </div>
                <div className={mainStyle.mainPhoto} style={props.style}>
                </div>
            </div>
        </section>
    )
}