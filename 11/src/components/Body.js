// Restaurant Card
import { useContext, useState } from "react";
import { RestaurantCard, withPromotedLabel } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { useRestaurantList } from "../utils/useRestaurantList";
import { UserContext } from "../utils/UserContext";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { listOfRestaurants, filteredRestaurants, setFilteredRestaurants } =
    useRestaurantList();
  const onlineStatus = useOnlineStatus();

  const RestaurantCardVeg = withPromotedLabel(RestaurantCard);

  const { setUserName, loggedInUser } = useContext(UserContext);

  return onlineStatus ? (
    listOfRestaurants.length > 0 ? (
      <>
        <div className="body">
          <div className="flex">
            {/* Search */}
            <div className="search m-4 p-4">
              <input
                type="text"
                className="border border-black"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <button
                className="px-4 py-2 bg-green-100 m-4 rounded-xl"
                onClick={() => {
                  const filteredRestaurantsList = listOfRestaurants.filter(
                    (res) =>
                      res.info.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurants(filteredRestaurantsList);
                }}
              >
                Search
              </button>
            </div>

            {/* Filter Top Restaurants */}
            <div className="search m-4 p-4 flex items-center">
              <button
                className="px-4 py-2 bg-gray-100 rounded-xl"
                onClick={() => {
                  setFilteredRestaurants(
                    listOfRestaurants.filter((res) => res.info.avgRating > 4)
                  );
                }}
              >
                Top Rated Restaurants
              </button>
            </div>
            <div className="search m-4 p-4 flex items-center">
              <label className="px-2">Username : </label>
              <input
                type="text"
                className="border border-black"
                value={loggedInUser}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            {filteredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                {restaurant.info.promoted ? (
                  <RestaurantCardVeg resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            ))}
          </div>
        </div>
      </>
    ) : (
      <Shimmer />
    )
  ) : (
    <h1>Looks like you are offline</h1>
  );
};
