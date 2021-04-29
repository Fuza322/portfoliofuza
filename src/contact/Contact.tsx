import React from 'react';
import style from './Contact.module.scss';
import {Title} from "../common/components/title/Title";

export function Contact() {

    return (
        <section className={style.contactBlock}>
            <Title title='Contact'/>
            <div data-aos="zoom-in" data-aos-duration="900" className={style.contactContainer}>
                <form className={style.contactForm}>
                    <input className={style.contactInput} placeholder='Name' type='text'/>
                    <input className={style.contactInput} placeholder='E-mail' type='text'/>
                    <textarea id=""
                              name=""
                              className={style.contactTextArea}
                              placeholder='Message'
                    ></textarea>
                    <button className={style.contactButton} type={'submit'}>Send</button>
                </form>
            </div>
        </section>
    )
}