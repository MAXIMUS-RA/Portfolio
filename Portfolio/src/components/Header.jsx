import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <div className="flex justify-between h-[120px] items-center">
      <div className="flex items-center gap-2">
        <img src="./src/assets/react.svg" className="object-cover" />
        <span className="font-family">Logo</span>
      </div>
      <div className="flex gap-11 items-center">
        <div>
          <Link
            to="#"
            className="hover-primary"
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            to="#"
            className="hover-primary"
          >
            Portfolio
          </Link>
        </div>
        <div>
          <Link
            to="#"
            className="hover-primary"
          >
            About me
          </Link>
        </div>
        <div>
          <Link
            to="#"
            className="hover-primary"
          >
            Testimonials
          </Link>
        </div>
      </div>
      <div>
        <button className="btn-border">Contact Me</button>
      </div>
    </div>
  );
}

export default Header;
