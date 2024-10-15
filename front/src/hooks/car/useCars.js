import { useQuery } from "@tanstack/react-query";
import { carService } from "../../services/car.service";

export const useCars = () => {
  const { data: cars, isPending } = useQuery({
    queryKey: ["cars"],
    queryFn: () => carService.getAll(),
  });

  return { cars, isPending };
};
