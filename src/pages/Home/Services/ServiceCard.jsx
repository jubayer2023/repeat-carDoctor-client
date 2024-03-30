import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;

  return (
    <div
      className="card bg-base-100 shadow-xl transition ease-in-out delay-150
      hover:scale-75 hover:cursor-pointer duration-300"
    >
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body  text-left">
        <h2 className="card-title font-bold">{title}</h2>
        <p className="text-lg font-semibold text-orange-500">Price: ${price}</p>
        <div className="flex justify-end">
          <Link to={`/book/${_id}`}>
            <button className="btn btn-outline btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
