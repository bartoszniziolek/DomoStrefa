import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import CreateEstateAgency from "./pages/CreateEstateAgency";
import AddEstateAgentToEstateAgency from "./pages/AddEstateAgentToEstateAgency";
import FavouritesListings from "./pages/FavouritesListings";
import CreateProperty from "./pages/CreateProperty";
import Listing from "./pages/Listing";
import Search from "./pages/Search";
import AddClient from "./pages/AddClient";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/listing/:listingId" element={<Listing />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route
            path="/update-listing/:listingId"
            element={<UpdateListing />}
          />
          <Route path="/add-client" element={<AddClient />} />
          <Route
            path="/create-estate-agency"
            element={<CreateEstateAgency />}
          />
          <Route
            path="/add-estate-agent-to-estate-agency"
            element={<AddEstateAgentToEstateAgency />}
          />
          <Route path="/create-property" element={<CreateProperty />} />
          <Route path="/favourites-listings" element={<FavouritesListings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
