import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bookService } from "../../services/book.service";
import toast from "react-hot-toast";
import { useMemo } from "react";
import { getError } from "../../utils/getError";

export const useChangeStatus = ({ bookId, status }) => {
  const queryClient = useQueryClient();

  const { mutate: changeStatus, isPending } = useMutation({
    mutationKey: ["change status"],
    mutationFn: () => bookService.updateStatus(bookId, status),
    onSuccess: () => {
      toast.success("Статус изменён");

      queryClient.refetchQueries({
        queryKey: ["books"],
      });
    },
    onError: (error) => {
      toast.error(getError(error));
    },
  });

  return useMemo(
    () => ({
      changeStatus,
      isPending,
    }),
    [changeStatus, isPending]
  );
};
