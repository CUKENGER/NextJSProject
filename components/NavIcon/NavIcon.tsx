import classes from './NavIcon.module.scss'
import Image from "next/image";

export default function NavIcon ({icon, text}) {
    return (


        <div className={classes.container__item}>
            <Image className={classes.icon} src={icon} alt="profile icon" width={20} height={20}/>
            <span className={classes.text}>{text}</span>
        </div>

)
}
