import React from "react";
import { useChangeStatus } from "../../../hooks/book/useChangeStatusBook";
import SecondButton from "../SecondButton";

function BookItemActions({ bookId }) {
  const { changeStatus: handleConfirmed, isPending: isConfirming } =
    useChangeStatus({ bookId, status: "confirmed" });

  const { changeStatus: handleCancel, isPending: isCanceling } =
    useChangeStatus({ bookId, status: "cancel" });

  const isLoading = isCanceling || isConfirming;

  return (
    <div className="flex items-center mt-[22px] justify-between w-full">
      <SecondButton
        className="h-[72px] w-[248px]"
        onClick={() => handleConfirmed()}
        disabled={isLoading}
      >
        Подвердить
      </SecondButton>
      <SecondButton
        className="h-[72px] w-[248px] border-[4px] border-black bg-white_main"
        onClick={() => handleCancel()}
        disabled={isLoading}
      >
        Отклонить
      </SecondButton>
    </div>
  );
}

export default BookItemActions;
