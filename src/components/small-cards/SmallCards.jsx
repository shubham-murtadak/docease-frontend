import { Link } from "react-router-dom";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

function SmallCards({ card }) {
  const {
    id,
    service_name,
    category,
    price,
    duration,
    counselor,
    rating,
    brief_description,
    long_description,
    image,
    platform,
    skill_focus,
    availability,
  } = card || {};
  return (
    <Card className="w-full">
      <Link to={`/service/${id}`}>
        <CardHeader className="flex flex-row items-center gap-3">
          <img
            className="w-16 h-16 object-cover rounded-full"
            src={image}
            alt=""
          />
          <div>
            <CardTitle className="text-lg">{service_name}</CardTitle>
            <CardDescription>{category}</CardDescription>
          </div>
        </CardHeader>
      </Link>
    </Card>
  );
}

export default SmallCards;
