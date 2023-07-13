"use client"

import DoctorCard from "./DoctorCard"
import styles from "@/styles/carusel.module.scss"
import { useState } from "react"


const Carusel = () => {

    const data = [
        {
            position: "Dentist",
            name: "Shen",
            secondName: "Lee",
            image: "/dentist.png"
        },
        {
            position: "Dentist",
            name: "Shen",
            secondName: "Lee",
            image: "/therapist.png"
        },
        {
            position: "Dentist",
            name: "Shen",
            secondName: "Lee",
            image: "/gynecologist.png"
        },
        {
            position: "Dentist",
            name: "Shen",
            secondName: "Lee",
            image: "/gynecologist.png"
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const prevIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;

    return (
        <div className={styles.carusel}>
            <div className={styles.caruselContent}>
                <DoctorCard position={data[prevIndex].position} name={data[prevIndex].name} secondName={data[prevIndex].secondName} image={data[prevIndex].image} />
                <DoctorCard position={data[currentIndex].position} name={data[currentIndex].name} secondName={data[currentIndex].secondName} image={data[currentIndex].image} />
                <DoctorCard position={data[nextIndex].position} name={data[nextIndex].name} secondName={data[nextIndex].secondName} image={data[nextIndex].image} />
            </div>
        </div>
    )
}

export default Carusel