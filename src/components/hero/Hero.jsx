import Sliders from "../sliders/Sliders";

function Hero() {
  return (
    <div>
      {/* <div className="container mx-auto grid grid-cols-2 justify-center items-center px-4 my-8 gap-4 bg-muted">
        <div className="col-span-1 flex flex-col gap-4 items-start">
          <h2 className="text-5xl text-foreground leading-tight font-bold">
            Shape Your Career, <br /> Define{" "}
            <span className="text-primary"> Your Success</span>
          </h2>
          <p className="text-lg text-secondary-foreground">
            Take the first step to success with personalized resources and
            actionable insights to achieve your dreams.
          </p>
          <Button className="bg-primary mt-4">Start Your Journey</Button>
        </div>
        <div className="col-span-1">
          <img className="w-4/5 ml-auto" src={slides2} alt="" />
        </div>
      </div> */}
      <Sliders />
    </div>
  );
}

export default Hero;
