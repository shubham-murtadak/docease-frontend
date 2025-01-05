import SectionHeading from "@/motion/SectionHeading";
import SectionSubtitle from "@/motion/SectionSubtitle";
import Cards from "./Cards";

function Services() {
  return (
    <div>
      <div className="conatiner mx-auto px-4 my-20">
        <div className="text-center max-w-2xl mx-auto">
          {/* <h2 className="font-semibold text-4xl text-primary text-center">
            Empower Your Career Journey
          </h2>
          <p className="text-secondary-foreground py-4  ">
            Explore our tailored services designed to guide you at every step of
            your professional path.
          </p> */}
          <SectionHeading title={"Empower Your Career Journey"} />
          <SectionSubtitle
            subtitle={
              "Explore our tailored services designed to guide you at every step of your professional path."
            }
          />
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Services;
