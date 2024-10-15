import { InputMask } from "@react-input/mask";
import React from "react";
import { Controller } from "react-hook-form";

function InputPhone({ control, name, className, ...rest }) {
  return (
    <Controller
      control={control}
      rules={{
        required: "Телефон обязательный",
      }}
      name={name}
      render={({ field: { value, onChange }, formState: { errors } }) => (
        <div className="w-full flex flex-col space-y-[13px] items-start">
          <label className="font-semibold text-white_main text-[24px]">
            Номер телефона
          </label>
          <InputMask
            mask="8(___)-___-__-__"
            onChange={onChange}
            value={value}
            showMask
            replacement={{ _: /\d/ }}
            className="flex items-center justify-center w-full rounded-[8px] bg-input_main pl-[37px] h-[74px] text-[20px] text-input_text"
            {...rest}
          />
          {errors?.phone && (
            <p className="text-red-400 text-[22px]">{errors?.phone?.message}</p>
          )}
        </div>
      )}
    />
  );
}

export default InputPhone;
