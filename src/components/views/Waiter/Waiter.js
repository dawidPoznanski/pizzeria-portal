import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Waiter.module.scss';

function Waiter() {
  return (
    <div className={styles.component}>
      <h2>Waiter view</h2>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>New Order </Link>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/:id`}>Order Details </Link>
    </div>
  );
}

export default Waiter;
