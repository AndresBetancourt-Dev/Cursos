import { useRouter } from "next/router";
import React, { Fragment } from "react";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import { getFilteredEvents } from "../../data/dummy-data";

const FilteredEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const [year, month] = filterData;

  if (
    isNaN(+year) ||
    isNaN(+month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
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

  const filteredEvents = getFilteredEvents({
    year: +year,
    month: +month,
  });

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

  const date = new Date(+year, +month - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </Fragment>
  );
};

export default FilteredEventsPage;
