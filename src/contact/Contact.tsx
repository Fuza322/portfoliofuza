import React from 'react';
import contactStyle from './Contact.module.css';
import style from "../common/styles/Common.module.css";

export function Contact() {
    return (
        <section className={contactStyle.contactBlock}>
            <div className={`${style.container} ${contactStyle.contactContainer}`}>
                <div className={contactStyle.divContactTitle}>
                    <h2 className={style.sectionTitle}>Contact</h2>
                </div>
                <form className={contactStyle.contactForm}>
                    <input className={contactStyle.contactInput} placeholder='Name' type='text'/>
                    <input className={contactStyle.contactInput} placeholder='E-mail' type='text'/>
                    <textarea className={contactStyle.contactTextArea} id="" placeholder='Your message'
                              name=""></textarea>
                    <button className={contactStyle.contactButton}>Send</button>
                </form>
            </div>
        </section>
    )
}