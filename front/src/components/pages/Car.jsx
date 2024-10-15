import { Navigate } from "react-router-dom";
import { useCar } from "../../hooks/car/useCar";
import toast from "react-hot-toast";
import { getMedia } from "../../utils/getMedia";
import Loading from "../ui/Loading";
import CarCard from "../ui/carItem/CarCard";

function Car() {
  const { car, isPending } = useCar();

  if (!isPending && !car?.id) {
    toast.error("Мишины нету");
    return <Navigate to="/" replace />;
  }
  return (
    <div className="w-full min-h-screen grid grid-cols-2">
      {isPending ? (
        <Loading />
      ) : (
        <>
          <img
            src={getMedia(car.image)}
            alt="image_car"
            className="w-full h-[960px] object-cover pt-[85px]"
          />
          <div className="w-full pl-[139px]  pt-[135px]">
            <CarCard car={car} />
          </div>
        </>
      )}
    </div>
  );
}

export default Car;
