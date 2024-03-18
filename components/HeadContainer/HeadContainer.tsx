import classes from "../../pages/index.module.scss";
import A from "../A/A";
import Head from "next/head";

const HeadContainer = ({children, keywords, metatitle}) => {
    return (
        <>
            <Head>
                <meta keywords={'nextjs' + keywords}/>
                <title>{metatitle}</title>
            </Head>

            <div>
                {children}
            </div>
        </>
    );
};

export default HeadContainer;