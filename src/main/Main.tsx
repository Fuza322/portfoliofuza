import React from 'react';
import mainStyle from './Main.module.css'
import styleContainer from './../common/styles/Container.module.css'

export function Main() {
    return (
        <div className={mainStyle.mainBlock}>
            <div className={styleContainer.container}>
                <div className={mainStyle.mainText}>
                    <span>Hi there</span>
                    <h1>I am Osipik Ivan</h1>
                    <p>Front-end developer (React)</p>
                </div>
                <div className={mainStyle.mainPhoto}></div>
            </div>
        </div>
    )
}