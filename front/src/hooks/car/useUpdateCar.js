import { useNavigate } from "react-router-dom";
import { carService } from "../../services/car.service";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useMemo } from "react";
import { getError } from "../../utils/getError";

export const useUpdateCar = ({ carId, reset }) => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: ["update product"],
    mutationFn: (data) => carService.update(carId, data),
    onSuccess(data) {
      reset();

      toast.success("Машина обновлена");

      navigate(`/`);
    },
    onError(error) {
      toast.error(getError(error));
    },
  });

  const handleUpdateCar = (data) => {
    mutate(data);
  };

  return useMemo(
    () => ({ handleUpdateCar, isPending }),
    [handleUpdateCar, isPending]
  );
};
