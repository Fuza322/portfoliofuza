import React from 'react';
import Particles from 'react-particles-js';
import ReactTypingEffect from 'react-typing-effect';
import style from './Main.module.scss'

export type MainType = {
    style: { backgroundImage: string }
}

const particlesOptions = {
    "particles": {
        "number": {"value": 90, "density": {"enable": true, "value_area": 800}},
        "color": {"value": "#FF9000"},
        "shape": {
            "type": "circle",
            "stroke": {"width": 0, "color": "#"},
            "polygon": {"nb_sides": 5},
        },
        "size": {"value": 7, "random": true, "anim": {"enable": false, "speed": 10, "sync": false}},
        "move": {
            "speed": 1.3,
            "random": false,
            "straight": false,
            "bounce": false,
            "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
        }
    },
}

export function Main(props: MainType) {
    return (
        <section className={style.mainBlock}>
            <div className={style.particlesContainer}>
                <Particles className={style.particles} params={particlesOptions}/>
                <div className={style.particlesContent}>
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
                        <div data-aos="fade-left" data-aos-duration="1200" className={style.mainPhoto}
                             style={props.style}>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}