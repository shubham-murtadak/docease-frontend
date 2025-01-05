import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";

function Toggler({ open, onOpenChange }) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger></SheetTrigger>
      <SheetContent
        className="flex flex-col justify-center items-center"
        side={"left"}
      >
        {/* <SheetHeader> */}
        {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
        <SheetDescription></SheetDescription>
        {/* </SheetHeader> */}
        <ul id="navlinks" className="flex flex-col items-center gap-6">
          <li>
            <NavLink
              className={
                "px-4 py-1 rounded-md transition-all duration-150 ease-in-out hover:text-blue-800 border-white"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                "px-4 py-1 rounded-md transition-all duration-150 ease-in-out hover:text-blue-800 border-white"
              }
              to={"/my-profile"}
            >
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                "px-4 py-1 rounded-md transition-all duration-150 ease-in-out hover:text-blue-800 border-white"
              }
              to={"/online-booking"}
            >
              Online Booking
            </NavLink>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default Toggler;
