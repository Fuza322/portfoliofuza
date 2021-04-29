import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import style from './Main.module.scss'

export type MainType = {
    style: { backgroundImage: string }
}

export function Main(props: MainType) {
    return (
        <section className={style.mainBlock}>
            <div className={style.mainContainer}>
                <div data-aos="fade-right" data-aos-duration="1200" className={style.mainTextContainer}>
                    <div className={style.mainTextBlock}>
                        <span className={style.mainText}>Hi There, </span>
                        <span className={style.mainNameText}><span
                            className={style.mainText}>I'm </span>Ivan Osipik</span>
                    </div>

                    <div>
                        <ReactTypingEffect
                            className={style.mainPositionText}
                            text={'Front-end developer (React).'}
                            speed={100}
                            eraseSpeed={50}
                            eraseDelay={7000}
                            typingDelay={0}
                        />
                    </div>
                </div>
                <Tilt
                    scale={1.02}>
                    <div data-aos="fade-left" data-aos-duration="1200" className={style.mainPhoto}
                         style={props.style}>
                    </div>
                </Tilt>
            </div>
        </section>
    )
}