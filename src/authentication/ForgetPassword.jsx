import forgetAnimation from "@/animation/forget-password.json";
import SpinnerWhite from "@/components/loader/SpinnerWhite";
import SEO from "@/components/seo/SEO";
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
import { sendPasswordResetEmail } from "firebase/auth";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import Lottie from "react-lottie";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function ForgetPassword() {
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  const [mail, setMail] = useState(null);
  const { handleGoogleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: forgetAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target.email.value;
    toast
      .promise(sendPasswordResetEmail(auth, email), {
        loading: "Sending",
        success: <b>Verification email sent.</b>,
        error: <b>Could not sent.</b>,
      })
      .then(() => {
        setLoading(false);
        window.open("https://mail.google.com/mail/");
      })
      .catch(() => setLoading(false));
  };

  const handleGoogle = () => {
    setLoading(true);
    handleGoogleLogin()
      .then(() => {
        setLoading(false);
        toast.success("Login successfull!");
        return navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center max-w-7xl mx-auto px-4">
      <SEO title={"Forget Password"} />
      <form onSubmit={handleSubmit}>
        <Card className="mx-auto md:max-w-sm my-10 col-span-1">
          <CardHeader>
            <CardTitle className="text-2xl">
              Forget Your Passwod ? 🤔{" "}
            </CardTitle>
            <CardDescription>
              Enter your email below to reset your password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  defaultValue={state}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                {loading ? <SpinnerWhite /> : "Send Verification Mail"}
              </Button>
              <Button
                type="button"
                onClick={handleGoogle}
                variant="outline"
                className="w-full"
              >
                <FaGoogle /> or Login with google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to={"/auth/signup"} className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
      <div className="col-span-1 hidden md:grid">
        <Lottie width={300} height={300} options={defaultOptions}></Lottie>
      </div>
    </div>
  );
}
