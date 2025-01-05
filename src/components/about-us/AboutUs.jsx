import aboutUs from "@/assets/about-us.jpg";
import verify from "@/assets/verify.png";
import SectionHeading from "@/motion/SectionHeading";
import SectionSubtitle from "@/motion/SectionSubtitle";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

function AboutUs() {
  return (
    <div className="mt-10 container mx-auto px-4">
      <div>
        <div className="text-center max-w-2xl mx-auto">
          {/* <h2 className="font-semibold text-4xl text-primary text-center">
            Who We Are
          </h2>
          <p className="text-secondary-foreground py-4  ">
            Explore our tailored services designed to guide you at every step of
            your professional path.
          </p> */}
          <SectionHeading title={"Who We Are"} />
          <SectionSubtitle
            subtitle={
              "Explore our tailored services designed to guide you at every step of your professional path."
            }
          />
        </div>

        <Card className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 border-blue-600">
          <div className="col-span-1">
            <img
              className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
              src={aboutUs}
              alt=""
            />
          </div>
          <div className="col-span-1 relative before:absolute  before:w-3/4 before:h-40 before:bg-blue-200 before:blur-3xl before:rounded-md before:-rotate-45 overflow-hidden before:-bottom-20 before:-right-20 ">
            <CardHeader className="flex flex-col gap-4">
              <CardTitle className="text-3xl">
                Empowering Your Journey to Success
              </CardTitle>
              <CardDescription className="text-base mt-4">
                At Career Compass, we are dedicated to empowering individuals
                and organizations with the tools, guidance, and strategies
                needed to thrive in todays competitive world. Our mission is to
                bridge the gap between ambition and achievement, offering
                tailored solutions that cater to diverse needs. With a team of
                passionate professionals and years of expertise, we specialize
                in career counseling, personal development, and strategic
                planning. Whether youre starting your career, navigating a
                transition, or striving to elevate your potential, were here to
                guide you every step of the way.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3 z-50 relative">
                <div className="flex items-center gap-3">
                  <img className="w-7" src={verify} alt="" />
                  <p>
                    <span className="font-semibold text-blue-500">
                      Personalization:
                    </span>{" "}
                    Solutions that match your unique aspirations.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <img className="w-7" src={verify} alt="" />
                  <p>
                    <span className="font-semibold text-blue-500">
                      Empowerment:
                    </span>{" "}
                    Providing you with skills, confidence, and direction.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <img className="w-7" src={verify} alt="" />
                  <p>
                    <span className="font-semibold text-blue-500">
                      Results:
                    </span>{" "}
                    Achieving measurable milestones that reflect your success.
                  </p>
                </div>
              </div>
              <Link to={"/online-booking"}>
                <Button className="mt-6">connect with us today!</Button>
              </Link>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default AboutUs;
