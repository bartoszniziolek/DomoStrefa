import { useEffect, useState } from "react";
import ListingItem from "../components/ListingItem";
import { useSelector } from "react-redux";

const FavouritesListings = () => {
  const [favourites, setFavourites] = useState([]);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const response = await fetch("/api/favourite/all/" + currentUser._id, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setFavourites(data);
      } catch (error) {
        console.error("Error fetching favourite listings:", error);
      }
    };

    fetchFavourites();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
      {favourites.length > 0 && (
        <div className="">
          <div className="my-3">
            <h1 className="text-2xl font-semibold text-slate-600">
              Ulubione ogłoszenia
            </h1>
          </div>
          <div className="flex flex-wrap gap-4">
            {favourites.map((listing) => (
              <ListingItem key={listing.id} listing={listing} className="" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FavouritesListings;
