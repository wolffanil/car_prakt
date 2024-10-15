import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/auth/auth.service";
import toast from "react-hot-toast";
import { useMemo } from "react";
import { useAuth } from "../../context/AuthProvider";
import { getError } from "../../utils/getError";

export const useAuthForm = ({ reset, type }) => {
  const { setIsAuth, setUser } = useAuth();

  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data) => authService.main(type, data),
    onSuccess(user) {
      toast.success(
        `Вы успешно ${type === "login" ? "вошли" : "зарегистрировались"}`
      );
      setUser(user);
      setIsAuth(true);
      reset();
      navigate("/");
    },
    onError(error) {
      toast.error(getError(error));
    },
  });

  const handleSubmitAuth = (data) => {
    mutate(data);
  };

  return useMemo(
    () => ({
      isPending,
      handleSubmitAuth,
    }),
    [handleSubmitAuth, isPending]
  );
};
