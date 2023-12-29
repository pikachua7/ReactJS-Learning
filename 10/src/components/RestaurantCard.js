import { CDN_URL } from "../utils/constant";

export const RestaurantCard = ({ resData }) => {
  const { name, cuisines, cloudinaryImageId, locality, avgRating } =
    resData.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-400">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} alt="" />
      <h3 className="py-4 font-bold text-lg">{name}</h3>
      <h4>{locality}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};
