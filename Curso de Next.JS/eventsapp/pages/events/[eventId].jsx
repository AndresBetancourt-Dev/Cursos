import React, { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import Head from "next/head";

const EventDetailPage = ({ event }) => {
  /*   
    Used if i want to get the query param to fetch using the helper function of dummy data
    const router = useRouter();
    const eventId = router.query.eventId; 

    const event = getEventById(eventId);
  */

  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No Event Found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
       <Head>
        <title>Events Application - {event.title}</title>
        <meta name="description" content={event.description}/>
      </Head>
      <EventSummary title={event?.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event?.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailPage;

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths,
    fallback: 'blocking'
  };
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
    revalidate : 30
  };
}
