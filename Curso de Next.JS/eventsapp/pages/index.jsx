import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import NewsletterRegistration from "../components/input/newsletter-registration";

export default function Home({featuredEvents}) {
    /*   
    This method is used when it's no using a real API
    const featuredEvents = getFeaturedEvents(); <- data/dummy-data.js
    */

  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <NewsletterRegistration />
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
