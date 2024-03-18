import classes from "../index.module.scss";
import Link from "next/link";
import {useRouter} from "next/router";
import A from "../../components/A/A";
import MainContainer from "../../components/HeadContainer/HeadContainer";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import styles from '../../styles/User.module.scss';
import Image from "next/image";
import avatar from '../../src/images/avatar.png';
import photo from '../../src/images/photo1.png';
import plus from '../../src/icons/plus.svg';
import message from '../../src/icons/message.svg';
import AvatarInfo from "../../components/AvatarInfo/AvatarInfo";
import Btn from "../../components/Btn/Btn";
import HeadContainer from "../../components/HeadContainer/HeadContainer";
import Container from "../../components/Container/Container";
import UserPhoto from "../../components/UserPhoto/UserPhoto";
import Wall from "../../components/Wall/PostContainer";
import PostContainer from "../../components/Wall/PostContainer";

export default function User ({user}) {

    const {query} = useRouter()

    return (

        <div className='container'>
            <Header/>
            <div className={classes.section__wrapper}>

                <SideBar/>


                    <div className={styles.main_user__container}>
                        <HeadContainer metatitle={user.name} keywords={user.name}>
                            <Container>
                                <div className={styles.user__wrapper}>

                                    <div className={styles.header__user}>
                                        <AvatarInfo/>
                                        <div className={styles.button__container}>

                                            <Btn text={'Подружиться'} image={plus}/>
                                            <Btn text={'Написать'} image={message}/>

                                        </div>
                                    </div>

                                    <UserPhoto/>


                                </div>
                            </Container>

                            <div className={styles.container}>
                                <p className={styles.title}>Стена</p>
                                <hr className={styles.line}/>

                                <PostContainer/>
                            </div>

                            <div className={styles.container}>
                                <PostContainer/>
                            </div>


                        </HeadContainer>
                    </div>

            </div>
        </div>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: {user},
    }
}