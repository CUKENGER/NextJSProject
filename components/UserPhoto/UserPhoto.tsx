import Image from "next/image";
import styles from './UserPhoto.module.scss'
import photo from '../../src/images/photo2.png'

export default function UserPhoto() {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title__container}>Фотографии</p>
            <hr className={styles.line}/>
            <div className={styles.container}>

                <Image src={photo} width={140} height={140} alt='user`s photo'></Image>
                <Image src={photo} width={140} height={140} alt='user`s photo'></Image>
                <Image src={photo} width={140} height={140} alt='user`s photo'></Image>
                <Image src={photo} width={140} height={140} alt='user`s photo'></Image>
                <Image src={photo} width={140} height={140} alt='user`s photo'></Image>
                <Image src={photo} width={140} height={140} alt='user`s photo'></Image>
            </div>
        </div>
    )
}