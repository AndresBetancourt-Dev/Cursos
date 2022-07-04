import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home({featuredEvents}) {
    /*   
    This method is used when it's no using a real API
    const featuredEvents = getFeaturedEvents(); <- data/dummy-data.js
    */

  return (
    <div className={styles.container}>
      <Head>
        <title>Events Application - Home</title>
        <meta name="description" content="Find a lot of great events that allow you to evolve..."/>
      </Head>
      <EventList events={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800
  };
}
