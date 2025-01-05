/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4PPWR7J2ZSd
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import updateAnimation from "@/animation/update-profile.json";
import SEO from "@/components/seo/SEO";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/firebase/firebase.config";
import { uploadToImgbb } from "@/lib/uploadToImgbb";
import { AuthContext } from "@/provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ArrowRight } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { LuPenLine } from "react-icons/lu";
import Lottie from "react-lottie";

export default function MyProfile() {
  const { user, setLoading } = useContext(AuthContext);
  const [isDisable, setIsDisable] = useState(true);
  const [submitDisable, setSubmitDisable] = useState(true);
  const [name, setName] = useState(user?.displayName);
  const [photo, setPhoto] = useState(null);
  const fileRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;

    toast
      .promise(
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo || user.photoURL,
        }),
        {
          loading: "Saving...",
          success: <b>Profile Updated!</b>,
          error: <b>Could not save.</b>,
        }
      )
      .then(() => {
        // toast.success("profile updated");
        setIsDisable(true);
        setSubmitDisable(true);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const formdata = new FormData();
    formdata.append("image", file);
    const x = await toast.promise(uploadToImgbb(formdata), {
      loading: "Uploading...",
      success: <b>Photo Uploaded!</b>,
      error: <b>Could not save.</b>,
    });
    setPhoto(x.url);
    setSubmitDisable(false);
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: updateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    if (name !== user?.displayName) {
      setSubmitDisable(false);
    } else {
      setSubmitDisable(true);
    }
  }, [name]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center my-10 px-4">
      <SEO title={`${user.displayName}'s profile`} />
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto max-w-md col-span-1"
      >
        <Card className="w-full max-w-full md:max-w-md">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">My Profile</CardTitle>
            <CardDescription>
              {user?.displayName} - your personal information
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-20 w-20 border-2 border-primary">
                <AvatarImage
                  className="object-cover"
                  src={photo || user.photoURL}
                  alt="Profile Picture"
                />
                <AvatarFallback>N/A</AvatarFallback>
              </Avatar>
              <Button
                type="button"
                onClick={() => fileRef.current.click()}
                variant="outline"
                size="sm"
              >
                <UploadIcon className="mr-2 h-4 w-4" />
                Change Photo
              </Button>
            </div>
            <input
              onChange={handleUpload}
              ref={fileRef}
              className="hidden"
              type="file"
              name="file"
              id=""
            />
            <div className="grid gap-2 relative">
              <Label htmlFor="name">Name</Label>
              <Input
                disabled={isDisable}
                className=""
                id="name"
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                defaultValue={user?.displayName}
              />
              <span
                title="Update your name"
                className="absolute top-8 right-2 cursor-pointer"
                onClick={() => setIsDisable(!isDisable)}
              >
                <LuPenLine />
              </span>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                disabled
                id="email"
                type="email"
                defaultValue={user?.email}
              />
            </div>

            {/* <div className="grid gap-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div> */}
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button type="submit" disabled={submitDisable}>
              Update Profile <ArrowRight />{" "}
            </Button>
          </CardFooter>
        </Card>
      </form>
      <div className="col-span-1 hidden md:grid">
        <Lottie options={defaultOptions} height={400} width={400}></Lottie>
      </div>
    </div>
  );
}

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
