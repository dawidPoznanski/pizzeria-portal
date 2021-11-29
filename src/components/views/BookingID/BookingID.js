import React from 'react';
import { useParams } from 'react-router';
import styles from './BookingID.module.scss';

function BookingID() {
  let {id} = useParams();
  return (
    <div className={styles.component}>
      <h2>Booking details</h2>
      <span>Booking ID: { id }</span>
    </div>
  );
}

export default BookingID;
