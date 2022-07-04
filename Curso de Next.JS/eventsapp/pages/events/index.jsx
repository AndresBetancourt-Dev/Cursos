import React, { Fragment } from "react";
import Head from "next/head";
import EventList from "../../components/events/event-list";
import { useRouter } from "next/router";
import EventSearch from "../../components/events/event-search";
import { getAllEvents } from "../../helpers/api-util";

const AllEventsPage = ({ events }) => {
  /*  
  Old way to obtaining All Events
  const events = getAllEvents();
  const router = useRouter(); 
*/
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <Head>
        <title>Events Application - All Events</title>
        <meta name="description" content="Find a lot of great events that allow you to evolve..."/>
      </Head>
      <EventSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </Fragment>
  );
};

export default AllEventsPage;

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}
