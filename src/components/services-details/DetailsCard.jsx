import { AiTwotoneDollarCircle } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { FaStarHalfStroke, FaUserGraduate } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";
import { MdDevices, MdEventAvailable } from "react-icons/md";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

function DetailsCard({ data }) {
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
  } = data || {};
  return (
    <Card className="">
      <CardHeader>
        <div>
          <img
            className="h-80 rounded-md w-full object-cover"
            src={image}
            alt=""
          />
        </div>
        <div className="py-4">
          <CardTitle className="py-2">
            <div>
              <h1 className="text-3xl font-bold">{service_name}</h1>
            </div>
          </CardTitle>
          <CardDescription className="pt-3 text-base">
            <p>{long_description}</p>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="">
        <div className="border border-blue-600 rounded-md grid grid-cols-1 md:grid-cols-2">
          <div className=" p-4 flex items-center gap-2">
            <span className="font-semibold flex items-center gap-2">
              <FaUserGraduate /> Counselor :
            </span>{" "}
            {counselor}
          </div>
          <div className="md:border-l border-t md:border-t-0 border-dashed md:border-solid border-blue-600 flex items-center gap-2 p-4">
            <span className="font-semibold flex items-center gap-2">
              <BiCategoryAlt /> Category :
            </span>{" "}
            {category}
          </div>
          <div className="p-4 border-dashed md:border-solid border-t border-blue-600 flex items-center gap-2">
            <span className="font-semibold flex items-center gap-2">
              <AiTwotoneDollarCircle /> Price :
            </span>{" "}
            $ {price}
          </div>
          <div className="md:border-l border-dashed md:border-solid border-t border-blue-600 flex items-center gap-2 p-4">
            <span className="font-semibold flex items-center gap-2">
              <IoMdTime /> Duration :
            </span>{" "}
            {duration}
          </div>
          <div className="p-4 border-dashed md:border-solid border-t border-blue-600 flex items-center gap-2">
            <span className="font-semibold flex items-center gap-2">
              <FaStarHalfStroke /> Rating :
            </span>{" "}
            {rating}
          </div>
          <div className="md:border-l border-dashed md:border-solid border-t  border-blue-600 flex items-center gap-2 p-4">
            <span className="font-semibold flex items-center gap-2">
              <MdDevices /> Platform :
            </span>{" "}
            {platform}
          </div>
          <div className="p-4 border-t border-dashed md:border-solid  border-blue-600 flex items-center gap-2">
            <span className="font-semibold flex items-center gap-2 min-w-fit">
              <GiSkills /> Skill Focus :
            </span>{" "}
            <span className="">{skill_focus}</span>
          </div>
          <div className="md:border-l border-dashed md:border-solid border-t border-blue-600 flex items-center gap-2 p-4">
            <span className="font-semibold flex items-center gap-2">
              <MdEventAvailable /> Availability :
            </span>{" "}
            {availability}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default DetailsCard;
