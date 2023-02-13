import { useState, useEffect } from 'react';
import { useSearchParams, Link, Outlet } from 'react-router-dom';
import { fetchEventsByName } from 'services/moviesApi';

const SearchPage = () => {
  const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const eventName = searchParams.get('eventname');

  useEffect(() => {
    if (eventName === '' || eventName === null) return;

    fetchEventsByName(eventName).then(setEvents);
  }, [eventName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ eventname: form.elements.eventname.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="eventname" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={event.id}>{event.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default SearchPage;
