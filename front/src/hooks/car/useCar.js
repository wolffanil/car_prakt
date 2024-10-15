import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { carService } from "../../services/car.service";

export const useCar = () => {
  const { id } = useParams();

  const { data: car, isPending } = useQuery({
    queryKey: ["cars", id],
    queryFn: () => carService.getById(id),
    enabled: !!id,
  });

  return { car, isPending };
};
