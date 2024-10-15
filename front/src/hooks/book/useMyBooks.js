import { useQuery } from "@tanstack/react-query";
import { bookService } from "../../services/book.service";

export const useMyBooks = () => {
  const { data: books, isPending } = useQuery({
    queryKey: ["my books"],
    queryFn: () => bookService.getMy(),
  });

  return { books, isPending };
};
