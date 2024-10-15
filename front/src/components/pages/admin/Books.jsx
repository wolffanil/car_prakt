import { useBooks } from "../../../hooks/book/useBooks";
import BookItem from "../../ui/book/BookItem";
import Loading from "../../ui/Loading";

function Books() {
  const { books, isPending } = useBooks();

  return (
    <div className="w-full min-h-screen pt-[85px]">
      <div className="container ">
        <ul className="w-full flex justify-between items-start mt-[54px] flex-wrap">
          {isPending ? (
            <Loading />
          ) : books?.length ? (
            books.map((book, index) => (
              <BookItem book={book} addAdmin key={index} />
            ))
          ) : (
            <p className="text-[24px] text-white_main font-semibold">
              Аренд нету
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Books;
