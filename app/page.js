import Image from 'next/image'
import Carusel from '@/components/Carusel'
import styles from '@/styles/mainPage.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>MEDICA CLINIC & CO</h1>
          <p className={styles.text}>A clinic of the latest medicine in the Kyiv city near to your house. We are a network of high-quality clinics with a wide range of services.</p>
        </div>
        <Image src='/clinic-photo.png' alt='Medica clinic photo' width={600} height={700} />
      </section>
      <section className={styles.doctors}>
        <Carusel />
        <h2 className={`${styles.asideText} ${styles.right} `}>Doctors</h2>
      </section>

      <section className={styles.about}>
        <h2 className={`${styles.asideText} ${styles.left} `}>About Us</h2>
        <div className={`${styles.background} ${styles.first}`}>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>Highly qualified doctors</h3>
            <p className={styles.text}>Our doctors are the best specialists in their fields with extensive experience and professional qualifications.
              They constantly keep their knowledge and skills up to date and implement advanced treatment methods.
            </p>
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>Security</h3>
            <p className={styles.text}>We make every effort to ensure your safety.
              By using strict sterilization protocols, protecting your medical data, and ensuring confidentiality, we create a trusted treatment environment where you and your family are safe.
            </p>
          </div>
        </div>
        <div className={`${styles.background} ${styles.second}`}>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>ModerN equipment</h3>
            <p className={styles.text}>We are equipped with advanced medical devices and technologies that allow us to accurately diagnose and treat a variety of diseases.
              Our imaging systems, laboratory equipment, and other devices help ensure accurate and reliable diagnosis.
            </p>
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>A wide range of services</h3>
            <p className={styles.text}>We offer a full range of medical services to meet all your needs.
              From consultations with leading doctors of various specializations to diagnostic procedures, surgical interventions, physiotherapy and rehabilitation, we provide a full cycle of treatment.
            </p>
          </div>
        </div>
        <div className={`${styles.background} ${styles.third}`}>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>Individual approach</h3>
            <p className={styles.text}>We understand that every patient is unique, so we provide individualized care.
              Our doctors and medical staff listen to your needs and wishes, develop personalized treatment plans, and ensure the best possible results.
            </p>
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>Comfortable environment</h3>
            <p className={styles.text}>
              You can enjoy comfort and tranquility in our clinic.
              Our spacious patient rooms, modern checking areas and amenities such as Wi-Fi access, cafeterias and others create a pleasant atmosphere and home-like comfort.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
