import toast from "react-hot-toast";
import { carService } from "../../services/car.service";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { useMutation } from "@tanstack/react-query";
import { getError } from "../../utils/getError";

export const useCreateCar = ({ reset }) => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: ["create car"],
    mutationFn: (data) => carService.create(data),
    onSuccess: () => {
      toast.success("Машина создана");

      reset();

      navigate("/");
    },
    onError(error) {
      toast.error(getError(error));
    },
  });

  const handleCreateCar = (data) => {
    mutate(data);
  };

  return useMemo(
    () => ({
      handleCreateCar,
      isPending,
    }),
    [handleCreateCar, isPending]
  );
};
