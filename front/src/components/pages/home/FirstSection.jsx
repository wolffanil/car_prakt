import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

function FirstSection() {
  const navigate = useNavigate();

  return (
    <section className=" container flex w-full justify-between items-start">
      <div className="flex flex-col items-start">
        <h1 className="font-bold text-[40px] text-start text-white_main mt-[100px] leading-tight">
          Высокопроизводительные автомобили в ваших руках
        </h1>
        <p className="text-[26px] mt-[36px] text-white_main text-start">
          Почувствуйте мощь и скорость – доверьтесь автомобилю, созданному
          специально для ценителей вождения. Каждая поездка дарит незабываемые
          впечатления благодаря нашим высокопроизводительным автомобилям.
        </p>

        <Button
          className="w-[324px] h-[74px] mt-[135px]"
          onClick={() => navigate("/cars")}
        >
          Арендовать
        </Button>
      </div>

      <img src="/home/car.jpg" alt="car" className="w-[1095px] h-[780px]" />
    </section>
  );
}

export default FirstSection;
