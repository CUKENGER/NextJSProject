import Link from "next/link";
import classes from "./A.module.scss";
export default function A ({ href}) {
    return (
        <Link className={classes.Link} href={href}>

        </Link>
    )
}