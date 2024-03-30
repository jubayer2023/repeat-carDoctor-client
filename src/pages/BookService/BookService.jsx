import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const BookService = () => {
  const serviceData = useLoaderData();
  //   console.log(serviceData);

  const { user } = useContext(AuthContext);

  const { _id, price, title, img } = serviceData;

  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;

    const bookingInfo = {
      customerName: name,
      img,
      email,
      date,
      price: price,
      service: title,
      service_id: _id,
    };
    console.log(bookingInfo);

    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data?.insertedId){
          alert('Service booked successfully!!!')
        }
      });
  };

  return (
    <div className=" min-h-screen bg-base-200">
      <h3 className="text-3xl font-bold text-center py-4 text-orange-400">
        {title}
      </h3>

      <form onSubmit={handleBookService} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-0">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              defaultValue={user?.email}
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              type="text"
              name="due"
              defaultValue={"$" + price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-block btn-primary"
            type="submit"
            value="Order Now"
          />
        </div>
      </form>
    </div>
  );
};

export default BookService;
