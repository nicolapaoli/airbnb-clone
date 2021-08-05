import Head from 'next/head'
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({exploreData, cardsData}) {
  return (
    <div className="">
      <Head>
        <title>AirBnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        <Banner />
        <main className="max-w-7xl mx-auto px-8 sm:px-16">
            <section className="pt-6">
                <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {/*    Pull data from server API endpoints */}
                    {exploreData?.map(item => (
                        <SmallCard
                            key={item.img}
                            img={item.img}
                            location={item.location}
                            distance={item.distance}
                        />
                        )
                    )}
                </div>
            </section>

            <section>
                <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
                <div className="flex space-x-3 p-3 overflow-x-scroll scrollbar-hide">
                    {cardsData?.map(item => (
                        <MediumCard
                            key={item.img}
                            img={item.img}
                            title={item.title} />
                    ))}
                </div>
            </section>

            <LargeCard
                img="https://links.papareact.com/4cj"
                title="The Outdoor"
                description="Whichlist curated by AirBnb"
                buttonText="Get Inspired"
            />
        </main>

        <Footer />
    </div>
  )
}

export async function getStaticProps() {
    const exploreData = await fetch("https://links.papareact.com/pyp")
        .then(res => res.json())

    const cardsData = await fetch("https://links.papareact.com/zp1")
        .then(res => res.json())

    return {
        props: {
            exploreData,
            cardsData
        }
    }
}
