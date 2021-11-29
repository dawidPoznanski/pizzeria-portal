import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';

function Tables() {
  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>Booking</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>Booking New</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}>Events</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>Events New</Link>
    </div>
  );
}

export default Tables;
