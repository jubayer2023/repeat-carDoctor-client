const BookingsRow = ({ bookingItems, handleDeleteBooking, handleUpdate }) => {
  // console.log(bookingItem);
  const { _id, service, img, date, price, status } = bookingItems;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDeleteBooking(_id)}
          className="btn btn-sm btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded-xl">{img && <img src={img} />}</div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>$ {price}</td>
      <th>
        {status === "confirm" ? (
          <span className="text-xs font-semibold rounded-md bg-green-600 px-3 py-1 text-white">
            Confirmed !
          </span>
        ) : (
          <button
            onClick={() => handleUpdate(_id)}
            className="btn bg-red-700 text-white btn-xs"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingsRow;
