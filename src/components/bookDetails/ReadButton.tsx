"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";

export default function ReadButton({ book }: { book: IBook }) {
  const { readBooks, setReadBooks } = useContext(BooksContext);
  // console.log("booksProvider", booksProvider);
  const handleReadBook = () => {
    console.log("read book btn triggered", book);

    setReadBooks([...readBooks, book]);
  };

  return (
    <div className="">
      <button
        className="btn btn-primary flex-1   text-white"
        onClick={() => handleReadBook()}
      >
        Read
      </button>
    </div>
  );
}
