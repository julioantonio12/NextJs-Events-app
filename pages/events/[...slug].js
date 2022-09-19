import { useRouter } from "next/router";

const FilteredEvents = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div><h2>Eventos filtrados</h2></div>
  );
}

export default FilteredEvents;