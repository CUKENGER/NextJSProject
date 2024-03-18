import classes from "./SideBar.module.scss";
import profile from '../../src/icons/profile.svg';
import posts from '../../src/icons/posts.svg';
import messages from '../../src/icons/messages.svg';
import friends from '../../src/icons/friends.svg';
import groups from '../../src/icons/groups.svg';
import photo from '../../src/icons/photo.svg';
import music from '../../src/icons/music.svg';
import video from '../../src/icons/videj.svg';
import stickers from '../../src/icons/stickers.svg';
import NavIcon from "../NavIcon/NavIcon";
import A from "../A/A";
import Link from "next/link";

function NextLink(props) {
    return null;
}

export default function SideBar () {
    return (
        <div className={classes.container}>
            <Link href="/users/1">
                <NavIcon icon={profile} text={'Профиль'}/>
            </Link>

            <Link href="/users/1">
                <NavIcon icon={posts} text={'Посты'}/>
            </Link>

            <Link href="/users/1">
                <NavIcon icon={messages} text={'Сообщения'}/>
            </Link>
            <Link href="/users/1">
                <NavIcon icon={friends} text={'Друзья'}/>
            </Link>
            <Link href="/users/1">
                <NavIcon icon={groups} text={'Сообщества'}/>
            </Link>

            <Link href="/users/1">
                <NavIcon icon={photo} text={'Фото'}/>
            </Link>

            <Link href="/users/1">
                <NavIcon icon={music} text={'Музыка'}/>
            </Link>

            <Link href="/users/1">
                <NavIcon icon={video} text={'Видео'}/>
            </Link>

            <Link href="/users/1">
                <NavIcon icon={stickers} text={'Стикеры'}/>
            </Link>


        </div>
    )
}