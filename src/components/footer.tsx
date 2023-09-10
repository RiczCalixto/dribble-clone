import Image from "next/image";
import Link from "next/link";
import React from "react";
import { footerLinks } from "../constants";

type FooterLink = { footerLink: { title: string; links: string[] } };
const FooterColumn: React.FC<FooterLink> = ({ footerLink }) => (
  <div className="footer_column">
    <h4 className="font-semibold">{footerLink.title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {footerLink.links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex w-full flex-col gap-12">
        <div className="flex flex-col items-start">
          <Image
            src="/logo-purple.svg"
            width={115}
            height={38}
            alt="Flexibble"
          />
          <p className="mt-5 max-w-xs text-start text-sm font-normal">
            Flexible is the world&lsquo;s leading community for creatives to
            share, grow and get hierd.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          {footerLinks.map((footerLink) => (
            <div className="flex flex-1 flex-col gap-4" key={footerLink.title}>
              <FooterColumn footerLink={footerLink} />
            </div>
          ))}
        </div>
      </div>
      <div className="flexBetween footer_copyright">
        <p>@2023 Flexibble. All rights reserved.</p>
        <p className="text-gray">
          <span className="font-semibold text-black">10.214</span> projects
          submitted
        </p>
      </div>
    </footer>
  );
};

export default Footer;
