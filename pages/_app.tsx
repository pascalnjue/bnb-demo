import '../src/styles/globals.scss';
import "bootstrap-icons/font/bootstrap-icons.css";
import type {AppProps} from 'next/app';
import AuthProvider from "../src/components/auth/AuthProvider";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    )
}

export default MyApp
