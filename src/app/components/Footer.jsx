import React from "react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import EmailIcon from "../../../public/envelope-at-fill.svg";
import { githubUrl, linkedinUrl, email } from "@/info";

const Footer = () => {
  return (
    <footer className="footer border-t z-10 border-[#33353F] text-white mt-10">
      <div className="container py-7 px-10 flex mx-auto text-center justify-between">
        <p className="">© 2024 Alicia Thoney</p>
        <div className="socials flex flex-row gap-2">
          <a href={githubUrl}>
            <Image src={GithubIcon} width={40} alt="Github Icon" />
          </a>
          <a href={linkedinUrl} className="mr-1">
            <Image src={LinkedinIcon} width={40}  alt="Linkedin Icon" />
          </a>
          <a href={email}>
            <Image src={EmailIcon} width={40}  alt="Email Icon" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
