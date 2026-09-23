"use client";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { BooksContext } from "@/context/BooksContext";

export default function Wishlist({book}:{book:IBook}) {
      const { wishlist, setWishlist } = useContext(BooksContext);
        // console.log("booksProvider", booksProvider);
        const handleAddToWishlist = () => {
        console.log("wishlist btn triggered", book);
    
        setWishlist([...wishlist, book]);
        }
  return (
    <div className="">
       <button className="btn btn-outline "onClick={()=>handleAddToWishlist()}>Wishlist</button>
    </div>
  );
}