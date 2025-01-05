import loginAnimation from "@/animation/LoginAnimation.json";
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
import { AuthContext } from "@/provider/AuthProvider";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import Lottie from "react-lottie";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SignIn() {
  const { handleLogin, handleGoogleLogin } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();
  const [mail, setMail] = useState(null);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loginAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    setMail(email);
    const pass = form.pass.value;
    handleLogin(email, pass)
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
  const handleGoogle = () => {
    setLoading(true);
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center max-w-7xl mx-auto px-4">
      <SEO title={"Sign In"} />
      <form onSubmit={handleSubmit}>
        <Card className="mx-auto md:max-w-sm my-10 col-span-1">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={(e) => setMail(e.target.value)}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    state={mail}
                    to={"/auth/forget-password"}
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input name="pass" id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                {loading ? <SpinnerWhite /> : "Login"}
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
