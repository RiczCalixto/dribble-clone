import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavLinks } from "@/constants";
import AuthProviders from "./auth-providers";
import { getCurrentUser } from "@/lib/session";
import { signOut } from "next-auth/react";
import ProfileMenu from "./profile-menu";

const NavBar = async () => {
  const session = await getCurrentUser();
  console.log("🚀 ~ file: nav-bar.tsx:10 ~ NavBar ~ session:", session);
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
        {session?.user ? (
          <>
            <ProfileMenu session={session} />
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
