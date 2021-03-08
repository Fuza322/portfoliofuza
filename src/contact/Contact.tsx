import React from 'react';
import contactStyle from './Contact.module.css';
import styleContainer from "../common/styles/Container.module.css";

export function Contact() {
    return (
        <div className={contactStyle.contactBlock}>
            <div className={`${styleContainer.container} ${contactStyle.contactContainer}`}>
                <h2 className={contactStyle.contactTitle}>Contact</h2>
                <form className={contactStyle.contactForm}>
                    <div className={contactStyle.divContactInput}>
                        <input className={contactStyle.contactInput} placeholder='Name' type='text'/>
                    </div>
                    <div className={contactStyle.divContactInput}>
                        <input className={contactStyle.contactInput} placeholder='E-mail' type='text'/>
                    </div>
                    <div className={contactStyle.divContactInput}>
                        <textarea className={contactStyle.contactTextArea} id="" placeholder='Your message'
                                  name=""></textarea>
                    </div>
                    <button className={contactStyle.contactButton}>Send</button>
                </form>
            </div>
        </div>
    )
}