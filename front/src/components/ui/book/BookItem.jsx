import { Link } from "react-router-dom";
import { formatISODate } from "../../../utils/formatISODate";
import { getMedia } from "../../../utils/getMedia";
import BookItemActions from "./BookItemActions";

const statusBook = {
  new: "Новый",
  cancel: "Отмененный",
  confirmed: "Подтверждённый",
};

function BookItem({ book, addAdmin }) {
  const car = book.car;
  const user = book?.user;

  return (
    <li className="flex flex-col items-start bg-white_main rounded-[10px] px-[18px] mb-[50px] pt-[44px] pb-[24px] max-w-[541px]">
      <img
        src={getMedia(car.image)}
        alt="car_image"
        className="w-full h-[303px] rounded-[4px] object-cover"
      />
      <h2 className="font-semibold mt-[40px] text-black text-[24px] cursor-pointer hover:text-button_main">
        <Link to={`/car/${car.id}`}>{car.name}</Link>
      </h2>
      <p className="text-[21px] text-black mt-[21px]">
        Описание: {car.description}
      </p>
      <p className="font-semibold text-[24px] text-black mt-[12px]">
        Дата бронирование -{" "}
        <span className="text-[24px] font-normal text-black">
          {formatISODate(book.resorve_date)}
        </span>
      </p>
      <p className="font-semibold text-[24px] text-black mt-[17px]">
        Статус:{" "}
        <span className="text-[24px] text-black font-normal">
          {statusBook[book.status]}
        </span>
      </p>
      {addAdmin && user?.fio && (
        <div className="flex flex-col items-start mt-[17px] text-[24px] text-black space-y-[5px]">
          <p className="text-[24px] font-semibold text-black mb-[6px]">
            Об клиенте
          </p>
          <p>{user.fio}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      )}
      {addAdmin && book.status === "new" && (
        <BookItemActions bookId={book.id} />
      )}
    </li>
  );
}

export default BookItem;
