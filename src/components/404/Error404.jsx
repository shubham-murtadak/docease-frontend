import error404 from "@/animation/404.json";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import SEO from "../seo/SEO";
import { Button } from "../ui/button";

function Error404() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: error404,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="container mx-auto flex flex-col min-h-screen justify-center items-center text-center">
      <SEO title={"404 - Not Found"} />
      <div>
        <Lottie width={400} height={200} options={defaultOptions}></Lottie>
      </div>
      <div>
        <h2 className="text-3xl font-bold">Oh No!... We Lost This Page</h2>
        <p className="text-muted-foreground/80 mt-3">
          We suggest you go to homepage while we fixing the problem.
        </p>
        <Link to={"/"}>
          {" "}
          <Button size="lg" className="mt-6">
            Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Error404;
