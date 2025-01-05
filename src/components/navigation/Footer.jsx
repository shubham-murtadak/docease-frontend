import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#1A232D] text-background">
      <div className="container mx-auto pt-14">
        <div className="text-center max-w-2xl mx-auto border-b border-border/30 px-1">
          <h2 className="font-semibold text-3xl text-center text-background">
            <span className="text-blue-500">Career Compass</span> : Your Career
            Path Starts Here
          </h2>
          <p className="text-secondary/90 px-4 text-center pt-4 pb-5 ">
            We’re here to guide you at every step of your career journey with
            expert advice, valuable resources, and personalized support to help
            you achieve your professional goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 md:justify-center md:items-baseline md:justify-items-center px-4 gap-8">
          <div>
            <h3 className="mt-2 mb-4 font-medium text-lg ">About Us</h3>
            <ul className="text-background/70 flex flex-col gap-1 ">
              <Link className="hover:text-white" to={"/auth/signin"}>
                <li>Who We Are</li>
              </Link>
              <Link className="hover:text-white" to={"/auth/signin"}>
                <li>Our Mission & Values</li>
              </Link>
              <Link className="hover:text-white" to={"/auth/signin"}>
                <li>Meet Our Team</li>
              </Link>
              <Link className="hover:text-white" to={"/auth/signin"}>
                <li>Testimonials</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="mt-2 mb-4 font-medium text-lg ">Resources</h3>
            <ul className="text-background/70 flex flex-col gap-1 ">
              <Link className="hover:text-white" to={"/auth/signin"}>
                <li>Blog</li>
              </Link>
              <Link className="hover:text-white" to={"/auth/signin"}>
                <li>Career Advice Articles</li>
              </Link>
              <Link className="hover:text-white" to={"/auth/signin"}>
                <li>Free Webinars</li>
              </Link>
              <Link className="hover:text-white" to={"/auth/signin"}>
                <li>Job Search Tips</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="mt-2 mb-4 font-medium text-lg ">Legal</h3>
            <ul className="text-background/70 flex flex-col gap-1 ">
              <Link className="hover:text-white" to={"/auth/signin"}>
                <li>Privacy Policy</li>
              </Link>
              <Link className="hover:text-white" to={"/auth/signin"}>
                <li>T&C - Terms and Conditions</li>
              </Link>
              <Link className="hover:text-white" to={"/auth/signin"}>
                <li>Refund Policy</li>
              </Link>
              <Link className="hover:text-white" to={"/auth/signin"}>
                <li>Cookie Policy</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="mt-2 mb-4 font-medium text-lg ">
              Follow US on Socials
            </h3>
            <ul className="text-background/70  grid grid-cols-1 gap-2">
              <a target="_blank" href="https://facebook.com">
                <li className="hover:text-white flex items-center gap-2">
                  <FaFacebook className="text-xl text-blue-700" /> Facebook
                </li>
              </a>
              <a target="_blank" href="https://youtube.com">
                <li className="hover:text-white flex items-center gap-2">
                  <FaYoutube className="text-xl text-red-500" /> Youtube
                </li>
              </a>
              <a target="_blank" href="https://github.com">
                <li className="hover:text-white flex items-center gap-2">
                  <FaGithub className="text-xl text-white" /> Github
                </li>
              </a>
              <a target="_blank" href="https://instagram.com">
                <li className="hover:text-white flex items-center gap-2">
                  <FaInstagram className="text-xl text-red-300" /> Youtube
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div className="text-center py-4 border-t border-border/40 mt-6 text-background/90">
          <p>Made with 💚 in Bangladesh</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
