import { CDN_URL } from "../utils/constant";

export const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 ">
              <span>{item.card.info.name}</span>
              <span> - ₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          {item.card.info.imageId && (
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button className="p-2 bg-white shadow-lg text-green-500 rounded-lg mx-2">
                  ADD +{" "}
                </button>
              </div>
              <img src={CDN_URL + item.card.info.imageId} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};