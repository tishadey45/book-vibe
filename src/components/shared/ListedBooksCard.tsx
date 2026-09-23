import { IBook } from "@/types/books.type";

interface IListedBooksCardProps {
  book: IBook;
}


export default function ListedBooksCard({ book }: IListedBooksCardProps) {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">This is ListedBooksCard</h1>
    </div>
  );
}