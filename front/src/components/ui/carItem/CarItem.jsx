import { useNavigate } from "react-router-dom";
import { getMedia } from "../../../utils/getMedia";
import Button from "../Button";

function CarItem({ car }) {
  const navigate = useNavigate();

  return (
    <li className="w-[394px] bg-white_main rounded-[10px] px-[18px] pt-[19px] pb-[22px] flex flex-col items-start mb-[54px] overflow-hidden">
      <img
        src={getMedia(car.image)}
        alt="car_image"
        className="w-[358px] rounded-[6px] h-[207px] object-cover"
      />
      <h2 className="font-semibold mt-[20px] text-black text-[20px] break-words w-full line-clamp-1">
        {car.name}
      </h2>
      <p className="mt-[8px] text-[16px] text-black break-words w-full line-clamp-2">
        {car.description}
      </p>
      <Button
        className="h-[62px] mt-[30px] w-full"
        onClick={() => navigate(`/car/${car.id}`)}
      >
        Подробнее
      </Button>
    </li>
  );
}

export default CarItem;
