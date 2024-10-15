import React from "react";
import SecondButton from "../SecondButton";
import { useNavigate } from "react-router-dom";
import { useDeleteCar } from "../../../hooks/car/useDeleteCar";

function CarCardActions({ carId }) {
  const navigate = useNavigate();

  const { isPending, deleteCar } = useDeleteCar({ carId });

  return (
    <div className="flex items-center mt-[31px] justify-between">
      <SecondButton
        className="h-[72px] w-[255px]"
        onClick={() => navigate(`/update-car/${carId}`)}
        disabled={isPending}
      >
        Редактировать
      </SecondButton>
      <SecondButton
        className="h-[72px] w-[255px] border-[4px] border-black bg-white_main"
        onClick={() => deleteCar()}
        disabled={isPending}
      >
        Удалить
      </SecondButton>
    </div>
  );
}

export default CarCardActions;
