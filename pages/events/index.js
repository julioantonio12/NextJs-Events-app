import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

const AllEvents = () => {
  const router = useRouter();
  const searchEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  const allEvents = getAllEvents();
  return (
    <>
      <EventsSearch onSearch={searchEventsHandler} />
      <EventList items={allEvents} />
    </>
  );
};

export default AllEvents;
