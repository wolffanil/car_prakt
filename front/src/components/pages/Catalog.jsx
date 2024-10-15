import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import Button from "../ui/Button";
import { useCars } from "../../hooks/car/useCars";
import Loading from "../ui/Loading";
import CarItem from "../ui/carItem/CarItem";

function Catalog() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const { isPending, cars } = useCars();

  return (
    <div className="w-full min-h-screen pt-[85px]">
      <div className="container">
        {user?.role === "admin" && (
          <Button
            className="h-[76px] mt-[75px]"
            onClick={() => navigate("/create-car")}
          >
            Создать новую машину
          </Button>
        )}
        <ul className="w-full flex items-start justify-between mt-[54px] flex-wrap">
          {isPending ? (
            <Loading />
          ) : cars?.length ? (
            cars.map((car, index) => <CarItem car={car} key={index} />)
          ) : (
            <p className="text-[24px] text-white_main font-semibold">
              Машин нету
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Catalog;
