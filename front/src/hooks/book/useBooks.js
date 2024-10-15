import { useQuery } from "@tanstack/react-query";
import { bookService } from "../../services/book.service";

export const useBooks = () => {
  const { data: books, isPending } = useQuery({
    queryKey: ["books"],
    queryFn: () => bookService.getAll(),
  });

  return { books, isPending };
};
