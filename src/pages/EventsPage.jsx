import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { fetchEvents } from 'services/moviesApi';

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  const elements = events.map(event => (
    <li key={event.id}>
      <Link to={event.id}>{event.name}</Link>
    </li>
  ));

  return (
    <>
      <ul>{elements}</ul> <Outlet />
    </>
  );
};

export default EventsPage;
