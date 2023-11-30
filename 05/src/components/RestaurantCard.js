import { CDN_URL } from "../utils/constant";

export const RestaurantCard = ({ resData }) => {
  const { name, cuisines, cloudinaryImageId, locality } = resData.info;

  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <h4>{locality}</h4>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};
