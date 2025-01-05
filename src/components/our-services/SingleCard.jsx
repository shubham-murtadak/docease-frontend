import { AiTwotoneDollarCircle } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

function SingleCard({ service }) {
  const {
    id,
    service_name,
    category,
    price,
    duration,
    counselor,
    rating,
    image,
  } = service;
  return (
    <Card className="w-full">
      <CardHeader>
        <Link to={`/service/${id}`}>
          <div>
            <img
              className="h-72 md:h-40 rounded-md object-cover w-full"
              src={image}
              alt=""
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent>
        <div>
          <div>
            <CardTitle className="text-2xl">{service_name}</CardTitle>
            <CardDescription className="py-2 flex items-center gap-2">
              <BiCategory /> Category: <span className="">{category}</span>
            </CardDescription>
          </div>
          <div>
            <p className=" flex items-center gap-2">
              <span className="flex items-center gap-2">
                <FaUserGraduate /> Couselor:{" "}
              </span>
              <span className="text-lg"> {counselor}</span>
            </p>
            <p className="pt-3 flex items-center gap-2">
              <AiTwotoneDollarCircle /> Price : ${price}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/service/${id}`}>
          <Button className="">Learn More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default SingleCard;
