import { IBook } from "@/types/books.type";
import Image from "next/image";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  }
};

export default async function BooksDetailsPage({
  params,
}: IBookDetailsPageProps) {
  const { id } = await params;
  const booksData = await getBooks();
  //   const book = booksData.find((book: IBook) => book.bookId === Number(id));
  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(id),
  ) as IBook;

  console.log(book, "book");
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="card lg:card-side overflow-hidden border border-base-300 bg-base-100 shadow-xl">
        {/* Book Image */}
        <figure className="relative bg-base-200 lg:w-2/5">
          <Image
            src={book.image}
            alt={book.bookName}
            width={500}
            height={700}
            className="h-full min-h-100 w-full object-cover lg:min-h-137.5"
          />
        </figure>

        {/* Book Details */}
        <div className="card-body justify-center lg:w-3/5 lg:p-10">
          {/* Category */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge badge-primary badge-outline">
              {book.category}
            </span>

            {book.tags.map((tag: string) => (
              <span key={tag} className="badge badge-ghost">
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="text-lg text-base-content/60">
            by{" "}
            <span className="font-semibold text-base-content">
              {book.author}
            </span>
          </p>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-3">
            <div className="rating rating-sm">
              {[1, 2, 3, 4, 5].map((star) => (
                <input
                  key={star}
                  type="radio"
                  name={`rating-${book.bookId}`}
                  className="mask mask-star-2 bg-orange-400"
                  checked={Math.round(book.rating) === star}
                  readOnly
                />
              ))}
            </div>

            <span className="font-semibold">{book.rating}</span>

            <span className="text-sm text-base-content/50">/ 5.0</span>
          </div>

          {/* Review */}
          <div className="mt-5">
            <h3 className="mb-2 text-lg font-bold">About this book</h3>

            <p className="leading-7 text-base-content/70">{book.review}</p>
          </div>

          {/* Book Information */}
          <div className="my-6 grid grid-cols-2 gap-3 rounded-2xl bg-base-200 p-4 sm:grid-cols-4">
            <div>
              <p className="text-xs text-base-content/50">Pages</p>
              <p className="mt-1 font-bold">{book.totalPages}</p>
            </div>

            <div>
              <p className="text-xs text-base-content/50">Published</p>
              <p className="mt-1 font-bold">{book.yearOfPublishing}</p>
            </div>

            <div>
              <p className="text-xs text-base-content/50">Publisher</p>
              <p className="mt-1 font-bold">{book.publisher}</p>
            </div>

            <div className="card-body">
              <p className="text-xs text-base-content/50">Rating</p>
              <p className="mt-1 font-bold">⭐ {book.rating}</p>
              <div className="card-actions justify-end">
            <button className="btn btn-success   text-white">
              Listen
            </button>
          </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
