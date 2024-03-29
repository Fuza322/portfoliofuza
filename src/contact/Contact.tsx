import React from "react"
import {Title} from "../common/components/title/Title"
import style from "./Contact.module.scss"

export function Contact() {

    return (
        <section id={"contactsId"} className={style.contactBlock}>
            <Title title="Contact"/>
            <div data-aos="zoom-in" data-aos-duration="900" className={style.contactContainer}
                 style={{height: "180px"}}>
                <form className={style.contactForm}>
                    <a href="https://www.linkedin.com/in/ivanosipik/">
                        <div className={style.contactButton}>Contact with me</div>
                    </a>
                </form>
            </div>
        </section>
    )
}