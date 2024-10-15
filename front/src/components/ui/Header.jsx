import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import SecondButton from "./SecondButton";

function Header() {
  const { isAuth, deleteUser, user } = useAuth();
  const navigate = useNavigate();

  const regirectToLogin = () => navigate("/login");

  return (
    <header className="fixed w-full top-0 left-0 right-0 bg-middle_green h-[85px] flex items-center justify-center z-[50]">
      <div className="container flex items-center justify-between">
        <img
          src="/logo.svg"
          alt="logo"
          className="w-[123p] h-[70px] object-cover cursor-pointer"
          onClick={() => navigate("/")}
        />
        <ul className="w-[542px] flex items-center justify-between text-white_main font-semibold text-[20px]">
          <li className="hover:text-button_main duration-200">
            <Link to="/cars">Машины</Link>
          </li>
          <li className="hover:text-button_main duration-200">
            <Link to="/my-books">Мои заказы</Link>
          </li>
          {user?.role === "admin" ? (
            <li className="hover:text-button_main duration-200">
              <Link to="/orders">Заказы</Link>
            </li>
          ) : null}
        </ul>
        {isAuth ? (
          <SecondButton
            className="rounded-[12px] w-[123px] h-[54px]"
            onClick={() => deleteUser()}
          >
            Выйти
          </SecondButton>
        ) : (
          <SecondButton
            className="rounded-[12px] w-[123px] h-[54px]"
            onClick={regirectToLogin}
          >
            Войти
          </SecondButton>
        )}
      </div>
    </header>
  );
}

export default Header;
