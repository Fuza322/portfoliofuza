import React from 'react';
import style from './Main.module.scss'

export type MainType = {
    style: { backgroundImage: string }
}


export function Main(props: MainType) {
    return (
        <section className={style.mainBlock}>

            <div className={style.mainContainer}>
                <div className={style.mainText}>
                    <h1 className={style.mainNameText}>I'm Ivan Osipik.</h1>
                    <p className={style.mainPositionText}>Front-end developer (React)</p>
                </div>
                <div className={style.mainPhoto} style={props.style}>
                </div>
            </div>
        </section>
    )
}