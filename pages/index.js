import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
    return (
        <>
            <Head>
                <title>Airbnb Clone</title>
                <link
                    rel='shortcut icon'
                    href='/favicon.ico'
                    type='image/x-icon'
                />
            </Head>

            <Header />
        </>
    );
}
