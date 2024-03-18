import logo from '../../src/icons/logo.svg';
import search from '../../src/icons/search.svg';
import notifications from '../../src/icons/notifications.svg';
import avatar from '../../src/icons/avatar.svg';
import menu from '../../src/icons/menu.svg';
import classes from "./Header.module.scss";
import Image from 'next/image';
import {themes, ThemeContext} from "../../src/contexts/ThemeContext";
import Toggle from "../Toggle/Toggle";
import Link from "next/link";
export default function Header () {

    return (
        <div className={classes.container}>
            <div className={classes.left__container}>

                <Link className={classes.link__logo} href="/">
                    <Image src={logo} alt="logo" width={35} height={35}/>
                </Link>
                <div className={classes.input__container}>
                    <Image className={classes.search__icon} src={search} alt="search icon" width={10} height={10}/>
                    <input className={classes.input} type="text" id="search" placeholder="Поиск"/>
                    <label className={classes.search__input} htmlFor="search"></label>
                </div>
                <Image className={classes.notifications} src={notifications} alt="notifications icon" width={25} height={25}/>
            </div>

            <div className={classes.right__container}>

                <label id="switch" className="switch">
                    <ThemeContext.Consumer>
                        {({ theme, setTheme }) => (
                            <Toggle
                                onChange={() => {
                                    if (theme === themes.light) setTheme(themes.dark)
                                    if (theme === themes.dark) setTheme(themes.light)
                                }}
                                value={theme === themes.dark}
                            />
                        )}
                    </ThemeContext.Consumer>
                    <span className="slider round"></span>
                </label>

                <Image className={classes.menu} src={menu} alt="menu icon" width={25} height={25}/>
                <Image className={classes.avatar} src={avatar} alt="avatar icon" width={30} height={30}/>

            </div>
        </div>
    )
}