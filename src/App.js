import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import NewBooking from './components/views/NewBooking/NewBooking';
import Login from './components/views/Login/Login';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import Homepage from './components/views/HomePage/HomePage';
import BookingID from './components/views/BookingID/BookingID';
import NewOrder from './components/views/NewOrder/NewOrder';
import OrderDetails from './components/views/OrderDetails/OrderDetails';
import EventDetails from './components/views/EventDetails/EventDetails';
import NewEvent from './components/views/NewEvent/NewEvent';


function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout >
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage}/>
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />

          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={NewBooking} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={BookingID} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={NewEvent} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={EventDetails} />


          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={NewOrder} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={OrderDetails} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
