import styles from "./Post.module.scss";
import Image from 'next/image';
import ava from '../../src/images/ava_maker.png';
import post_photo from '../../src/images/post_photo.png';

export default function Post () {
    return (
        <div className={styles.container}>

            <div className={styles.post__container}>
                <div className={styles.header__post}>
                    <div className={styles.avatar__maker}>
                        <Image src={ava} width={55} height={55} alt='maker`s avatar'/>
                    </div>
                    <div className={styles.post__info}>
                        <p className={styles.maker__name}>Имя пользователяч</p>
                        <p className={styles.post__time}>5 минут назад</p>
                    </div>

                </div>
                <div className={styles.post__content}>
                    <div className={styles.post_text__container}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis corporis cum dolores ea, eius eos eveniet labore maiores natus optio, sint, soluta tenetur totam.
                    </div>
                    <div className={styles.post_photo__container}>
                        <Image className={styles.post__photo} src={post_photo} alt='post photo'/>
                    </div>
                </div>
            </div>
        </div>

    )
}