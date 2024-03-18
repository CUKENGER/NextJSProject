import styles from "./Btn.module.scss";
import Image from "next/image";
import plus from "../../src/icons/plus.svg";


export default function Btn({text, image}) {
    return (
        <button className={styles.button}>
            <Image src={image} width={20} height={20} alt="icon for btn"/>
            {text}
        </button>
    )
}