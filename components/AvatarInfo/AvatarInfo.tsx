import styles from "./AvatarInfo.module.scss";
import Image from "next/image";
import avatar from "../../src/images/avatar.png";
import NavIcon from "../NavIcon/NavIcon";
import profile from "../../src/icons/profile.svg";
import Link from "next/link";


export default function AvatarInfo() {
    return (
        <div className={styles.avatar__wrapper}>
            <div>
                <Image src={avatar} width={150} height={200} alt="avatar image"/>
            </div>
            <div className={styles.info__wrapper}>
                <Link href="/users/1">
                    <span className={styles.name}>Иван Анатольевич</span>
                </Link>
                <span className={styles.user__info}>16 лет</span>
                <span className={styles.user__info}>Город: Тверь</span>
                <span className={styles.user__info}>Женат</span>
            </div>
        </div>
    )
}
