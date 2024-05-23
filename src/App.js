import "./App.css";
import PrimaryNavbar from "./components/PrimaryNavbar";
import SecondaryNavbar from "./SecondaryNavbar";
import SignUp from "./components/banners/SignUp";
import {useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/banners/Home";
import Trending from "./components/banners/Trending";
import SadMood from "./components/banners/SadMood";

import Topfifty from "./components/banners/Topfifty";
import Toptwenty from "./components/banners/Toptwenty";
import Romantic from "./components/banners/Romantic";
import HappySongs from "./components/banners/HappySongs";
import Excited from "./components/banners/Excited";
import Footer from "./components/banners/Footer";
import Login from "./components/banners/Login";
import { Navigate } from "react-router-dom";
import Library from "./components/banners/Library";
import UpdatePassword from "./components/banners/UpdatePassword";
import ManageSubscriptions from "./subscription/ManageSubscriptions";
import Podcast from "./components/banners/Podcast";
import { useUser } from "./providers/UserProvider";

function App() {
  const {setIsMobile}=useUser();
  function ProtectedRoute({ children }) {
    if (sessionStorage.getItem("token")) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  }
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="main_container" style={{ overflow: "hidden" }}>
      <BrowserRouter>
        <PrimaryNavbar />
        <SecondaryNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/toptwenty" element={<Toptwenty />} />
          <Route path="/topfifty" element={<Topfifty />} />
          <Route path="/sad" element={<SadMood />} />
          <Route path="/romantic" element={<Romantic />} />
         
          <Route path="/happy" element={<HappySongs />} />
          <Route path="/excited" element={<Excited />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/updatepassword" element={<UpdatePassword />} />
          <Route path="/library" element={<Library />} />
          <Route
            path="/manageSubscriptions"
            element={<ManageSubscriptions />}
          />
          <Route path="/podcast" element={<Podcast />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
