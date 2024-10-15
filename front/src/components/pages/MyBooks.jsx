import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Loading from "../ui/Loading";
import { useMyBooks } from "../../hooks/book/useMyBooks";
import BookItem from "../ui/book/BookItem";

function MyBooks() {
  const { books, isPending } = useMyBooks();
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen pt-[85px]">
      <div className="container ">
        <Button
          className="h-[76px] mt-[75px]"
          onClick={() => navigate("/cars")}
        >
          Арендовать
        </Button>
        <ul className="w-full flex justify-between items-start  mt-[54px] flex-wrap">
          {isPending ? (
            <Loading />
          ) : books?.length ? (
            books.map((book, index) => <BookItem book={book} key={index} />)
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

export default MyBooks;
