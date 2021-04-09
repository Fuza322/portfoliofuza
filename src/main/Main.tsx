import React from 'react';
import mainStyle from './Main.module.scss'
import style from '../common/styles/Common.module.css'

export function Main() {
    return (
        <section className={mainStyle.mainBlock}>
            <div className={`${style.container} ${mainStyle.mainContainer}`}>
                <div className={mainStyle.mainText}>
                    <span>Hi there</span>
                    <h1 className={mainStyle.h1Main}>I am Osipik Ivan</h1>
                    <p>Front-end developer (React)</p>
                </div>
                <div className={mainStyle.mainPhoto}></div>
            </div>
        </section>
    )
}