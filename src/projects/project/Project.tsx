import React from "react"
import {Button} from "../../common/components/button/Button"
import style from "./Project.module.scss"

export type ProjectType = {
    id: string
    projectTitle: string
    projectDescription: string
    stackTechonogy: string
    viewCodeLink: string
    style: { backgroundImage: string }
}

export function Project(props: ProjectType) {

    return (
        <div data-aos="zoom-in" data-aos-duration="900" className={style.project}>
            <div className={style.projectImage} style={props.style}></div>
            <div className={style.projectBody}>
                <div className={style.projectInfo}>
                    <h3 className={style.nameProjectText}>{props.projectTitle}</h3>
                    <p className={style.descriptionProjectText}>{props.projectDescription}</p>
                    <h3 className={style.TechnologiesText}>Technologies:</h3>
                    <p className={style.descriptionProjectText}>{props.stackTechonogy}</p>
                </div>
                <div className={style.projectButtonContainer}>
                    <Button
                        title={"View code"}
                        link={props.viewCodeLink}
                    />
                </div>
            </div>
        </div>
    )
}