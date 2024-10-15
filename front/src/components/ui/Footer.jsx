import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-[#1B1C19] py-[90px]">
      <div className="container flex items-center !justify-around">
        <ul className="flex flex-col w-[147px] space-y-[21px]">
          <li className="text-white_main text-[20px] cursor-pointer">
            <Link to="/login">ВХОД</Link>
          </li>
          <li className="text-white_main text-[20px] cursor-pointer">
            <Link to="/">ГЛАВНАЯ</Link>
          </li>
          <li className="text-white_main text-[20px] cursor-pointer">
            <Link to="/cars">КАТАЛОГ</Link>
          </li>
          <li className="text-white_main text-[20px] cursor-pointer">
            <Link to="/my-books">АРЕНДА</Link>
          </li>

          <img src="/payments.svg" alt="payments" className="mt-[22px]" />
        </ul>
        <div className="flex flex-col  items-center">
          <img
            src="/logo-footer.svg"
            alt="logo"
            className="w-[360px] h-[204px] object-cover"
          />
          <p className="text-[20px] text-white_main">
            ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
          </p>
        </div>
        <ul className="flex flex-col w-[255px] space-y-[21px]">
          <li className="text-white_main text-[20px] cursor-pointer">
            <Link to="/cars">ОПЛАТА</Link>
          </li>
          <li className="text-white_main text-[20px] cursor-pointer">
            <Link to="/cars">НАШИ АВТО</Link>
          </li>
          <li className="text-white_main text-[20px] cursor-pointer">
            <Link to="/my-books">МОИ ЗАКАЗЫ</Link>
          </li>
          <li className="text-white_main text-[20px] cursor-pointer">
            <Link to="/cars">ПУБЛИЧНАЯ ОФЕРА</Link>
          </li>

          <img
            src="/social.svg"
            alt="social"
            className="mt-[28px] cursor-pointer w-[197px]"
            onClick={() => navigate("/")}
          />
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
