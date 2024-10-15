import { useMutation } from "@tanstack/react-query";
import { bookService } from "../../services/book.service";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react";
import { getError } from "../../utils/getError";

export const useCreateBook = ({ reset }) => {
  const navigate = useNavigate();

  const { id } = useParams();

  const { mutate: creatBook, isPending } = useMutation({
    mutationKey: ["create book"],
    mutationFn: (data) => bookService.create({ carId: id, ...data }),
    onSuccess: () => {
      toast.success("Бронирование создано");

      reset();

      navigate("/my-books");
    },
    onError: (error) => {
      toast.error(getError(error));
    },
  });

  return useMemo(
    () => ({
      creatBook,
      isPending,
    }),
    [creatBook, isPending]
  );
};
