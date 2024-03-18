import '../styles/global.scss'
export default function MyApp ({Component, pageProps}) {

        return (
            <ThemeProvider>
                    <Component {...pageProps } />
            </ThemeProvider>
)
}

import ThemeProvider from "../src/contexts/ThemeProvider";
