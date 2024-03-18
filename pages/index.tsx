import MainContainer from "../components/HeadContainer/HeadContainer";
import styles from "./index.module.scss";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import HeadContainer from "../components/HeadContainer/HeadContainer";

const Index = () => {
    return (
        <div className='container'>
            <Header/>
            <div className={styles.section__wrapper}>

                <SideBar/>
                <div>

                    <HeadContainer metatitle={'Main'} keywords={'main'}>

                        <div className={styles.Container}>
                            <h1>Main Page</h1>
                        </div>

                    </HeadContainer>
                </div>
            </div>
        </div>

    );
};

export default Index;