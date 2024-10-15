import React from "react";
import { getMedia } from "../../../utils/getMedia";
import { Controller, useForm } from "react-hook-form";
import { useCreateBook } from "../../../hooks/book/useCreateBook";
import Button from "../Button";
import { useAuth } from "../../../context/AuthProvider";
import CarCardActions from "./CarCardActions";
import { useNavigate } from "react-router-dom";

function CarCard({ car }) {
  const { reset, handleSubmit, control } = useForm();

  const { creatBook, isPending } = useCreateBook({ reset });

  const navigate = useNavigate();

  const { user, isAuth } = useAuth();

  return (
    <div className="w-[608px] px-[43px] pt-[44px] bg-white_main pb-[25px] rounded-[10px] mb-[50px]">
      <img
        src={getMedia(car.image)}
        alt="car_image"
        className="rounded-[4px] w-full h-[303px] object-cover"
      />
      <h2 className="mt-[41px] text-wrap font-semibold text-[24px] text-black break-words">
        {car.name}
      </h2>

      <p className="mt-[21px] text-[20px] text-black break-words">
        Описание: {car.description}
      </p>

      {!isAuth ? (
        <Button
          className="mt-[21px] h-[76px] w-full"
          onClick={() => navigate("/login")}
        >
          Войти чтобы арендовать
        </Button>
      ) : (
        <form className="w-full mt-[12px]" onSubmit={handleSubmit(creatBook)}>
          <Controller
            control={control}
            rules={{
              required: "Дата обязательна",
            }}
            name="resorve_date"
            render={({ field: { value, onChange }, formState: { errors } }) => (
              <div className="w-full flex flex-col space-y-[13px] items-start">
                <label className="font-semibold text-black text-[24px]">
                  Дата бронирование
                </label>
                <input
                  type="date"
                  placeholder="21.04.2024"
                  className="flex items-center justify-center w-full rounded-[8px] bg-input_main pl-[37px] h-[74px] text-[20px] text-input_text"
                  value={value}
                  onChange={onChange}
                  disabled={isPending}
                />
                {errors?.resorve_date && (
                  <p className="text-red-400 text-[20px]">
                    {errors?.resorve_date?.message}
                  </p>
                )}
              </div>
            )}
          />

          <Button
            className="mt-[21px] h-[76px] w-full"
            type="submit"
            disabled={isPending}
          >
            Арендовать
          </Button>
        </form>
      )}

      {user?.role === "admin" ? <CarCardActions carId={car?.id} /> : null}
    </div>
  );
}

export default CarCard;
