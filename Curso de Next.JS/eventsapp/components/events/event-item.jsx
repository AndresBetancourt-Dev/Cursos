import React from "react";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRight from "../icons/arrow-right-icon";
import Button from "../ui/button";
import classes from "./event-item.module.css";

const EventItem = ({ event: { title, image, date, location, id } }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li key={id} className={classes.event}>
      <img src={`/${image}`} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>

          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>{" "}
            <span className={classes.icon}>
              <ArrowRight />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
