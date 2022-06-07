import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../data/dummy-data";
import styles from "../styles/Home.module.css";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div className={styles.container}>
        <h1>Home Page</h1>
        <EventList events={featuredEvents} />
    </div>
  );
}
