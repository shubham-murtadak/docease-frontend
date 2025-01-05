import onlineBookImg from "@/animation/online-booking.json";
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
import { PhoneInput } from "@/components/ui/phone-input";
import { DateTimePicker } from "@/components/ui/select-date-time";
import { SelectService } from "@/components/ui/select-service";
import { useState } from "react";
import toast from "react-hot-toast";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
function OnlineBooking() {
  const [myDate, setMyDate] = useState(false);
  const [myService, setMyService] = useState(false);
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: onlineBookImg,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleSubmitPromise = (time) => {
    return new Promise((res) => {
      setTimeout(() => res(), time);
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!myDate) return toast.error("Please point your schedule");
    toast
      .promise(handleSubmitPromise(1000), {
        loading: <p>Booking...</p>,
        success: <p>Successfully Booked!</p>,
      })
      .then(() => navigate("/"));
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center px-4">
      <SEO title={"Online Booking"} />
      <div className="col-span-1">
        <form onSubmit={handleSubmit}>
          <Card className="mx-auto md:max-w-sm my-10">
            <CardHeader>
              <CardTitle className="text-2xl">Book Your Slot Today!</CardTitle>
              <CardDescription>
                Secure your spot in just a few clicks. Fill out the form below
                to schedule your appointment hassle-free.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
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
                  <Label htmlFor="phone">Phone Number</Label>
                  <PhoneInput defaultCountry={"BD"} />
                </div>
                <div className="grid gap-2">
                  <SelectService />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="service">Point your schedule</Label>
                  <DateTimePicker setMyDate={setMyDate} />
                </div>

                <Button type="submit" className="w-full">
                  Book Online
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
      <div className="col-span-1 hidden md:grid">
        <Lottie width={300} height={300} options={defaultOptions}></Lottie>
      </div>
    </div>
  );
}

export default OnlineBooking;
