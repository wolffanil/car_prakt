import React from "react";
import { Controller, useForm } from "react-hook-form";
import { usePhoto } from "../../../../hooks/photo/usePhoto";
import { useCreateCar } from "../../../../hooks/car/useCreateCar";
import { useUpdateCar } from "../../../../hooks/car/useUpdateCar";
import Button from "../../../ui/Button";
import FileUploader from "../../../ui/form-elements/FileUpload";
import toast from "react-hot-toast";

function CarForm({ type, car }) {
  const { uploadPhoto } = usePhoto("cars");

  const { handleSubmit, reset, control, setError } = useForm({
    defaultValues: {
      name: car?.id ? car.name : "",
      image: car?.id ? car.image : "",
      description: car?.id ? car.description : "",
      file: [],
    },
  });

  const { handleCreateCar, isPending: isCreatingCar } = useCreateCar({
    reset,
  });

  const { handleUpdateCar, isPending: isUpdatingCar } = useUpdateCar({
    carId: car?.id,
    reset,
  });

  const isLoading = isCreatingCar || isUpdatingCar;

  const handleSubmitForm = async (data) => {
    if (type === "update") {
      const hasFileToUpdate = data.file.length > 0;

      let imageUrl = data.image;

      if (hasFileToUpdate) {
        imageUrl = await uploadPhoto(data.file);

        if (!imageUrl) {
          toast.error("Что-то пошло не так, попробуйте снова");
          return;
        }
      }
      handleUpdateCar({ ...data, image: imageUrl });
      return;
    }

    if (type === "create") {
      if (data?.file.length < 1) {
        setError("file", { message: "Фото обязательны" });
        return;
      }
      const imageUrl = await uploadPhoto(data.file);
      if (!imageUrl) {
        toast.error("Что-то пошло не так, попробуйте снова");
        return;
      }

      handleCreateCar({ ...data, image: imageUrl });
      return;
    }
  };

  return (
    <div className="w-full min-h-screen pt-[105px] pb-[150px]">
      <div className="w-[562px] flex flex-col items-center mx-auto">
        <h1 className="text-center font-bold text-[28px] text-white_main">
          {type === "create" ? "Создать аренду" : "Обновить аренду"}
        </h1>
        <p className="text-[24px] text-white_main mt-[16px]">
          Легко и быстро {type === "create" ? "создайти" : "обновите"} аренду.
        </p>
        <span className="bg-[#D9D9D9] w-[291px] h-[4px] mt-[21px]" />

        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="w-full flex flex-col space-y-[19px] mt-[37px]"
        >
          <Controller
            control={control}
            rules={{
              required: "Название обязательно",
            }}
            name="name"
            render={({ field: { value, onChange }, formState: { errors } }) => (
              <div className="w-full flex flex-col space-y-[13px] items-start">
                <label
                  htmlFor="name"
                  className="font-semibold text-white_main text-[24px]"
                >
                  Название машины
                </label>
                <input
                  id="name"
                  type="name"
                  placeholder="lada xray"
                  className="flex items-center justify-center w-full rounded-[8px] bg-input_main pl-[37px] h-[74px] text-[20px] text-input_text"
                  value={value}
                  onChange={onChange}
                  disabled={isLoading}
                />
                {errors?.name && (
                  <p className="text-red-400 text-[22px]">
                    {errors?.name?.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            control={control}
            name="file"
            render={({ field: { onChange }, formState: { errors } }) => (
              <div className="w-full flex flex-col space-y-[13px] items-start">
                <label className="font-semibold text-white_main text-[24px]">
                  Фото машины
                </label>
                <FileUploader
                  fieldChange={onChange}
                  mediaUrl={car?.image || ""}
                />
                {errors?.file && (
                  <p className="text-red-400 text-[22px]">
                    {errors?.file?.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            control={control}
            rules={{
              required: "Описание обязательно",
            }}
            name="description"
            render={({ field: { value, onChange }, formState: { errors } }) => (
              <div className="w-full flex flex-col space-y-[13px] items-start">
                <label
                  htmlFor="description"
                  className="font-semibold text-white_main text-[24px]"
                >
                  Описание машины
                </label>

                <textarea
                  id="description"
                  placeholder="норм машина"
                  className="flex items-center justify-center w-full rounded-[8px] bg-input_main pl-[37px] h-[150px] text-[20px] text-input_text pt-[15px]"
                  value={value}
                  onChange={onChange}
                  disabled={isLoading}
                />
                {errors?.description && (
                  <p className="text-red-400 text-[22px]">
                    {errors?.description?.message}
                  </p>
                )}
              </div>
            )}
          />

          <Button
            className="mt-[22px] h-[76px]"
            type="submit"
            disabled={isLoading}
          >
            {type === "create" ? "Создать аренду" : "Обновить аренду"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CarForm;
