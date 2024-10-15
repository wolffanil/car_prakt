import toast from "react-hot-toast";
import { useCar } from "../../../../hooks/car/useCar";
import { Navigate } from "react-router-dom";
import CarForm from "./CarForm";
import Loading from "../../../ui/Loading";

function UpdateCar() {
  const { car, isPending } = useCar();

  if (!isPending && !car?.id) {
    toast.error("Мишины нету");
    return <Navigate to="/" replace />;
  }
  return <>{!isPending ? <CarForm type="update" car={car} /> : <Loading />}</>;
}

export default UpdateCar;
