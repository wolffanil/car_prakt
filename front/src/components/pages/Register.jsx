import { Controller, useForm } from "react-hook-form";
import { useAuthForm } from "../../hooks/auth/useAuth";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import InputPhone from "../ui/form-elements/InputPhone";

function Register() {
  const { control, reset, handleSubmit } = useForm();

  const { handleSubmitAuth, isPending } = useAuthForm({
    reset,
    type: "register",
  });

  return (
    <div className="w-full min-h-screen pt-[105px] mb-[100px]">
      <div className="w-[562px] flex flex-col items-center mx-auto">
        <h1 className="text-center font-bold text-[28px] text-white_main">
          Добро пожаловать!
        </h1>
        <p className="text-[24px] text-white_main mt-[16px]">
          Присоединяйтесь к нашему сообществу
        </p>
        <span className="bg-[#D9D9D9] w-[291px] h-[4px] mt-[21px]" />

        <form
          onSubmit={handleSubmit(handleSubmitAuth)}
          className="w-full flex flex-col space-y-[19px] mt-[37px]"
        >
          <Controller
            control={control}
            rules={{
              required: "ФИО обязательный",
            }}
            name="fio"
            render={({ field: { value, onChange }, formState: { errors } }) => (
              <div className="w-full flex flex-col space-y-[13px] items-start">
                <label
                  htmlFor="fio"
                  className="font-semibold text-white_main text-[24px]"
                >
                  ФИО
                </label>
                <input
                  id="fio"
                  type="text"
                  placeholder="Иванов Иван Иванович"
                  className="flex items-center justify-center w-full rounded-[8px] bg-input_main pl-[37px] h-[74px] text-[22px] text-input_text"
                  value={value}
                  onChange={onChange}
                  disabled={isPending}
                />
                {errors?.fio && (
                  <p className="text-red-400 text-[22px]">
                    {errors?.fio?.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            control={control}
            rules={{
              required: "Email обязательный",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Невалидный email",
              },
            }}
            name="email"
            render={({ field: { value, onChange }, formState: { errors } }) => (
              <div className="w-full flex flex-col space-y-[13px] items-start">
                <label
                  htmlFor="email"
                  className="font-semibold text-white_main text-[24px]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="example@mail.ru"
                  className="flex items-center justify-center w-full rounded-[8px] bg-input_main pl-[37px] h-[74px] text-[22px] text-input_text"
                  value={value}
                  onChange={onChange}
                  disabled={isPending}
                />
                {errors?.email && (
                  <p className="text-red-400 text-[22px]">
                    {errors?.email?.message}
                  </p>
                )}
              </div>
            )}
          />

          <InputPhone control={control} name="phone" />

          <Controller
            control={control}
            rules={{
              required: "Водительское удостоверения обязательны",
              minLength: {
                value: 10,
                message: "Поле должно быть валидным",
              },
              maxLength: {
                value: 10,
                message: "Поле должно быть валидным",
              },
            }}
            name="driverLicense"
            render={({ field: { value, onChange }, formState: { errors } }) => (
              <div className="w-full flex flex-col space-y-[13px] items-start">
                <label
                  htmlFor="driverLicense"
                  className="font-semibold text-white_main text-[24px]"
                >
                  Водительское удостоверения
                </label>
                <input
                  id="driverLicense"
                  type="text"
                  placeholder="1234567890"
                  className="flex items-center justify-center w-full rounded-[8px] bg-input_main pl-[37px] h-[74px] text-[22px] text-input_text"
                  value={value}
                  onChange={onChange}
                  disabled={isPending}
                />
                {errors?.driverLicense && (
                  <p className="text-red-400 text-[22px]">
                    {errors?.driverLicense?.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            control={control}
            rules={{
              required: "Пароль обязательный",
              minLength: {
                value: 3,
                message: "Минимум 3 символа",
              },
              pattern: {
                value: /^(?=.*[0-9]).*$/,
                message: "Нужна минимум одна цифра",
              },
            }}
            name="password"
            render={({ field: { value, onChange }, formState: { errors } }) => (
              <div className="w-full flex flex-col space-y-[13px] items-start">
                <label
                  htmlFor="email"
                  className="font-semibold text-white_main text-[24px]"
                >
                  Пароль
                </label>
                <input
                  type="password"
                  placeholder="**********"
                  className="flex items-center justify-center w-full rounded-[8px] bg-input_main pl-[37px] h-[74px] text-[22px] text-input_text"
                  value={value}
                  onChange={onChange}
                  disabled={isPending}
                />
                {errors?.password && (
                  <p className="text-red-400 text-[22px]">
                    {errors?.password?.message}
                  </p>
                )}
              </div>
            )}
          />

          <div className="flex items-center space-x-[8px] mt-[13px]">
            <input
              type="checkbox"
              required
              className="w-[23px] h-[23px] rounded-[4px]"
            />
            <p className="font-semibold text-white_main text-[18px]">
              Я принимаю правила и условия
            </p>
          </div>

          <Button
            className="mt-[35px] h-[76px]"
            type="submit"
            disabled={isPending}
          >
            Создать аккаунт
          </Button>

          <p className="font-semibold text-white_main text-[18px] mt-[42px] text-center">
            Есть аккаунт?
            <Link to="/login" className="text-button_main ml-1">
              Войти
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
