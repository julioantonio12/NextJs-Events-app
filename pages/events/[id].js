import { useRouter } from "next/router";

const EventDetail = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <div><h2>Aquí se mostrará el evento por ID {router.query.id}</h2></div>
  );
}

export default EventDetail;