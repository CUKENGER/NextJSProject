import classes from "./index.module.scss";
import Link from "next/link";
import {useEffect, useState} from "react";
import A from "../components/A/A";
import MainContainer from "../components/HeadContainer/HeadContainer";
const Users = ({users}) => {

    return (
        <MainContainer keywords={'users'} metatitle={'Users'}>

            <div className={classes.Container}>
                <h1>USERS</h1>
                <ul className={classes.List}>
                    {users.map(user =>
                        <li className={classes.ListItem} key={user.id}>
                            <A href={`/users/${user.id}`} text={user.name}/>
                        </li>
                    )}
                </ul>
            </div>

        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()
    return {
        props: {users},
    }
}
