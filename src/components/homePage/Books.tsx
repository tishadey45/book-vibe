import { IBook } from "@/types/books.type";
import BookCard from "../shared/BookCard";

const getBooks = async (): Promise<IBook[]> => {
  try {
   const response = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
);

    if (!response.ok) {
      throw new Error("Failed to fetch books data");
    }

    const data: IBook[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  }
};

export default async function Books() {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-17.5 px-4">
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-500">
          Our Collection
        </p>

        <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
          Explore Popular Books
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          Discover amazing stories, timeless classics, and inspiring books from
          talented authors.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.slice(0, 9).map((book: IBook) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
