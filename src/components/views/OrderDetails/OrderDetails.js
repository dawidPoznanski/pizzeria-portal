import React from 'react';
import { useParams } from 'react-router';
import styles from './OrderDetails.module.scss';

function OrderDetails() {
  let {id} = useParams();
  return (
    <div className={styles.component}>
      <h2>Order details</h2>
      <span>Order ID: {id}</span>
    </div>
  );
}

export default OrderDetails;
