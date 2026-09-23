import logo from "@/assets/book.ico";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <>Books</>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={50} height={50} />
          Book Vibe
        </div>
      </div>

     <div className="flex items-center gap-6">
       <ul className="flex items-center gap-6 navbar-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/books">Listed Books</Link>
        </li>
        <li>
          <Link href="/read">page to read</Link>
        </li>
      </ul>
     </div>

      <div className="navbar-end gap-2">
        <button className="btn  btn-success text-white">Sign In</button>
        <button className="btn  btn-info text-white">Sign Up</button>
      </div>
    </div>
  );
}
