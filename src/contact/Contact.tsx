import React from 'react';
import contactStyle from './Contact.module.css';
import styleContainer from "../common/styles/Container.module.css";

export function Contact() {
    return (
        <div className={contactStyle.contactBlock}>
            <div className={`${styleContainer.container} ${contactStyle.contactContainer}`}>
                <h2 className={contactStyle.contactTitle}>Contact</h2>
                <form className={contactStyle.contactForm}>
                    <input placeholder='Name'
                           type='text'
                    />
                    <input
                        placeholder='E-mail'
                        type='text'
                    />
                    <textarea
                        id=""
                        placeholder='Your message'
                        name="">
                    </textarea>
                </form>
                <button>Send</button>
            </div>
        </div>
    )
}