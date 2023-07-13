import Image from "next/image"
import styles from "@/styles/doctorCard.module.scss"

const DoctorCard = ({id, position, name, secondName, image}) => {
  return (
    <article id={id} className={styles.card}>
        <h3 className={styles.title}>{position}</h3>
        <span className={styles.name}>{name}<br />{secondName}</span>
        <a href="" className={styles.button}>APPOINTMENT</a>
        <Image alt="Doctor portrait" src={image} width={200} height={300} className={styles.image}/>
    </article>
  )
}

export default DoctorCard