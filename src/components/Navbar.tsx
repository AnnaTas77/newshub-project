import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link href="/admin">
            <button>Admin</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
