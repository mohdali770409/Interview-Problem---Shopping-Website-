import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-amber-400">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to={"/"}
              className="text-lg sm:text-xl font-semibold whitespace-nowrap self-center dark:text-white"
            >
              <span className="px-2 py-1 rounded-lg bg-gradient-to-br  text-amber-700  ">
                Ecommerce
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8   sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="categories" />
              <Footer.LinkGroup col>
                {" "}
                <Footer.Link
                  href="/category/Electronics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Electronics
                </Footer.Link>
                <Footer.Link
                  href="/category/Fashion"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fashion
                </Footer.Link>
                <Footer.Link
                  href="/category/Home & Kitchen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home & Kitchen
                </Footer.Link>
                <Footer.Link
                  href="/category/Books"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Books
                </Footer.Link>
                <Footer.Link
                  href="/category/Sports & Outdoors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sports & Outdoor
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="follow us" />
              <Footer.LinkGroup col>
                {" "}
                <Footer.Link
                  href="https://github.com/mohdali770409?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/mohd-ali-6859951b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                {" "}
                <Footer.Link href="#">Privacy & Policy</Footer.Link>
                <Footer.Link href="#">Terms & Condition</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Mohd Ali"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://github.com/mohdali770409?tab=repositories"
              icon={FaGithub}
            ></Footer.Icon>
            <Footer.Icon
              href="https://www.linkedin.com/in/mohd-ali-6859951b2/"
              icon={FaLinkedin}
            ></Footer.Icon>
            <Footer.Icon href="#" icon={FaFacebook}></Footer.Icon>
            <Footer.Icon href="#" icon={FaInstagram}></Footer.Icon>
            <Footer.Icon href="#" icon={FaXTwitter}></Footer.Icon>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
