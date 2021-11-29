import React from 'react';
import { useParams } from 'react-router';
import styles from './EventDetails.module.scss';

function EventDetails() {
  let {id} = useParams();
  return (
    <div className={styles.component}>
      <h2>Event details</h2>
      <span>Event ID: { id }</span>
    </div>
  );
}

export default EventDetails;
