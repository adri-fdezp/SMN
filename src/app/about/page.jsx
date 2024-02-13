import Image from "next/image"
import styles from "./about.module.css";

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2>About the project</h2>
                <h1>Creating the future of marketplaces</h1>
                <p>
                    Social Market is a web platform that mixes the concepts of social network and marketplace.
                    The idea is that communities of users share with the community products or services that may be useful, receiving feedback from different consumers.
                    This project was born as a personal self-learning challenge and a way to develop my technical skills.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>

                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src={"https://images.pexels.com/photos/2622170/pexels-photo-2622170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="About image" fill />
            </div>
        </div>
    )
}

export default AboutPage