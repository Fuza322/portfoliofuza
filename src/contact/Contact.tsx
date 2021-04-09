import React from 'react';
import contactStyle from './Contact.module.scss';
import style from "../common/styles/Common.module.css";
import {Title} from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";

export function Contact() {

    return (
        <section className={contactStyle.contactBlock}>
            <div className={`${style.container} ${contactStyle.contactContainer}`}>
                <Title title='Contact'/>
                <form className={contactStyle.contactForm}>
                    <input className={contactStyle.contactInput} placeholder='Name' type='text'/>
                    <input className={contactStyle.contactInput} placeholder='E-mail' type='text'/>
                    <textarea id=""
                              name=""
                              className={contactStyle.contactTextArea}
                              placeholder='Message'
                    ></textarea>
                    <Button
                        title={'Send'}
                    />
                </form>
            </div>
        </section>
    )
}