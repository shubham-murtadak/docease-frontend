import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

function Cards() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {[...services].slice(6, 12).map((service) => (
        <SingleCard key={service.id} service={service} />
      ))}
    </div>
  );
}

export default Cards;
