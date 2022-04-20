import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardsData }) {
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
            <Banner />

            <main className='max-w-7xl mx-auto px-8 sm:px-16'>
                <section className='pt-6'>
                    <h2 className='text-4xl font-semibold pb-5'>
                        Explore Nearby
                    </h2>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {exploreData?.map(
                            ({ img, distance, location }, index) => (
                                <SmallCard
                                    key={index}
                                    img={img}
                                    distance={distance}
                                    location={location}
                                />
                            )
                        )}
                    </div>
                </section>

                <section>
                    <h2 className='text-4xl font-semibold py-8'>
                        Live Anywhere
                    </h2>

                    <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
                        {cardsData?.map(({ img, title }, index) => (
                            <MediumCard key={index} img={img} title={title} />
                        ))}
                    </div>
                </section>

                <section>
                    <LargeCard />
                </section>
            </main>
        </>
    );
}

export const getStaticProps = async () => {
    const [exploreData, cardsData] = await Promise.all([
        fetch(`https://links.papareact.com/pyp`).then((res) => res.json()),
        fetch(`https://links.papareact.com/zp1`).then((res) => res.json()),
    ]);

    return {
        props: {
            exploreData,
            cardsData,
        },
    };
};
