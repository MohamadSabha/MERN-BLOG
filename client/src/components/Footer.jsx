import {
  Footer,
  FooterTitle,
  FooterIcon,
  FooterLink,
  FooterDivider,
  FooterCopyright,
  FooterLinkGroup,
} from "flowbite-react";
import logo from "../assets/logo.png";

import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer
      container
      className="dark:bg-primary border border-t-8 border-accent"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          {/* logo */}
          <div className="mt-5">
            <Link to="/">
              <img src={logo} alt="MHD's Logo" className="w-20 h-15 " />
            </Link>
          </div>
          {/* three columon section */}
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            {/* columon about */}
            <div>
              <FooterTitle title="About" />
              <FooterLinkGroup col>
                <FooterLink
                  href="https://mhdsabha.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tech Hub
                </FooterLink>
                <FooterLink
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MHD's Blog
                </FooterLink>
              </FooterLinkGroup>
            </div>
            {/* columon Follow us */}

            <div>
              <FooterTitle title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink
                  href="https://github.com/MohamadSabha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </FooterLink>
                <FooterLink href="#">Discord</FooterLink>
              </FooterLinkGroup>
            </div>
            {/* columon Legal */}

            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href="#"
            by="MHD's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon
              href="https://github.com/MohamadSabha"
              icon={BsGithub}
            />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
