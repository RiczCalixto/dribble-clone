import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flexBetween gap-4 border-b border-nav-border px-8 py-5">
      <div className="flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="Flexibble" />
        </Link>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
      </div>
    </nav>
  );
};

export default NavBar;
