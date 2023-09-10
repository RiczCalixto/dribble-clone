import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavLinks } from "@/app/constants";
import AuthProviders from "./auth-providers";

const NavBar = () => {
  let session;
  return (
    <nav className="flexBetween navbar">
      <div className="flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="Flexibble" />
        </Link>
        <ul className="text-small hidden gap-7 xl:flex">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session ? (
          <>
            <p>UseerPhoto</p>
            <Link href={"/create-project"}> Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
