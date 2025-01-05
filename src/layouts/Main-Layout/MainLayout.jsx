import Footer from "@/components/navigation/Footer";
import Nav from "@/components/navigation/Nav";
import ScrollToTop from "@/components/toTop/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="font-lato">
      <Toaster />
      <ScrollToTop />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
