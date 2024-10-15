import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { carService } from "../../services/car.service";
import toast from "react-hot-toast";
import { useMemo } from "react";
import { getError } from "../../utils/getError";

export const useDeleteCar = ({ carId }) => {
  const navigate = useNavigate();

  const { mutate: deleteCar, isPending } = useMutation({
    mutationKey: ["delete car"],
    mutationFn: () => carService.delete(carId),
    onSuccess() {
      toast.success("Машина удалена");

      navigate("/cars");
    },
    onError(error) {
      toast.error(getError(error));
    },
  });

  return useMemo(
    () => ({
      deleteCar,
      isPending,
    }),
    [deleteCar, isPending]
  );
};
