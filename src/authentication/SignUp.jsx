import signupanimation from "@/animation/SignupAnimation.json";
import SpinnerWhite from "@/components/loader/SpinnerWhite";
import SEO from "@/components/seo/SEO";
import TestPassword from "@/components/test-password/TestPassword";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/firebase/firebase.config";
import { AuthContext } from "@/provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import Lottie from "react-lottie";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SignUp() {
  const { handleRegister, handleGoogleLogin } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const navigate = useNavigate();
  const { state } = useLocation();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: signupanimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleGoogle = () => {
    handleGoogleLogin()
      .then(() => {
        setLoading(false);
        toast.success("Login successfull!");
        if (state) return navigate(state);
        return navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    handleRegister(email, pass)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          setLoading(false);
          toast.success("Signup successfull!");
          return navigate("/");
        });
      })
      .catch((err) => {
        setLoading(false);
        toast.err(err.message);
      });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center max-w-7xl mx-auto  px-4">
      <SEO title={"Sign Up"} />
      <form onSubmit={handleSubmit}>
        <Card className="mx-auto md:max-w-sm my-10 col-span-1">
          <CardHeader>
            <CardTitle className="text-2xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your information below to signup to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="photo">Photo URL</Label>
                <Input
                  id="photo"
                  type="url"
                  name="photo"
                  placeholder="https://example.com/image.png"
                  required
                />
              </div>
              <div className="grid gap-2">
                <TestPassword setTotalScore={setTotalScore} />
              </div>
              <Button
                disabled={totalScore >= 3 ? false : true}
                type="submit"
                className="w-full"
              >
                {loading ? <SpinnerWhite /> : "Sign Up"}
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleGoogle}
              >
                <FaGoogle /> Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to={"/auth/signin"} className="underline">
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
      <div className="col-span-1 hidden md:grid">
        <Lottie width={400} height={400} options={defaultOptions}></Lottie>
      </div>
    </div>
  );
}
