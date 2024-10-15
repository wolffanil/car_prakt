import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

function ThirdSection() {
  const navigate = useNavigate();

  return (
    <section className=" bg-white_main pb-[65px] mt-[179px]">
      <div className="container flex w-full justify-between items-start">
        <div className="flex flex-col items-start w-[551px]">
          <h2 className="font-bold text-[36px] text-black text-start leading-[1.1] mt-[128px]">
            Автомобили в аренду: путешествуйте на любые расстояния!
          </h2>
          <p className="text-[#989898] text-[20px] mt-[30px] text-start">
            Устали от общественного транспорта? Оставьте его в прошлом! Наша
            компания предлагает аренду автомобилей: от экономичных компактов до
            роскошных внедорожников. Простой процесс бронирования, прозрачные
            условия и выгодные цены делают наше предложение идеальным для любых
            поездок. Владейте дорогами уверенно!
          </p>
          <Button
            className="mt-[47px] w-[394px] h-[85px]"
            onClick={() => navigate("/cars")}
          >
            Посмотреть автомобили
          </Button>
        </div>

        <img
          src="/home/car-two.jpg"
          alt="car"
          className="-mt-[89px] w-[1032px] h-[834px]"
        />
      </div>
    </section>
  );
}

export default ThirdSection;
