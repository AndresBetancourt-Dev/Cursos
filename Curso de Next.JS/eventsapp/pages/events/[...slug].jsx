import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import { getFilteredEvents } from "../../helpers/api-util";

const FilteredEventsPage = ({
  hasError,
  filteredEvents,
  date: { year, month },
}) => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  if (hasError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>¡Something went Wrong with this search, Check your Filters!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events Found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <Fragment>
      <Head>
        <title>Events Application - All Events</title>
        <meta
          name="description"
          content={`All Events for ${month}/${year}`}
        />
      </Head>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </Fragment>
  );
};

export default FilteredEventsPage;

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;
  const [year, month] = filterData;
  if (
    isNaN(+year) ||
    isNaN(+month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: +year,
    month: +month,
  });

  return {
    props: {
      date: {
        year: +year,
        month: +month,
      },
      filteredEvents,
    },
  };
}
