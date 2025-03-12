import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import google from '../assets/google.svg';

export function Footer() {
  return (
    <footer className="w-full justify-center bg-primary-400 sm:px-[138px]">
      <div className="mx-4 flex flex-wrap justify-between gap-5 py-[72px] sm:mx-0">
        <img src={logo} alt="Manual Logo" className="size-[75px]" />
        <nav className="flex flex-wrap gap-6">
          <div className="flex w-[46%] flex-col gap-5 sm:w-[174px]">
            <h4 className="h-[15px]tracking-[1.5px] text-[10px] font-bold uppercase leading-[15px]">
              Product
            </h4>
            <div className="flex flex-col gap-5">
              <Link to="/popular">Popular</Link>
              <Link to="/trending">Trending</Link>
              <Link to="/guided">Guided</Link>
              <Link to="/products">Products</Link>
            </div>
          </div>
          <div className="flex w-[46%] flex-col gap-5 sm:w-[174px]">
            <h4 className="h-[15px] text-[10px] font-bold uppercase leading-[15px] tracking-[1.5px]">
              Company
            </h4>
            <div className="flex flex-col gap-5">
              <Link to="/press">Press</Link>
              <Link to="/mission">Mission</Link>
              <Link to="/strategy">Strategy</Link>
              <Link to="/about">About</Link>
            </div>
          </div>
          <div className="flex w-[46%] flex-col gap-5 sm:w-[174px]">
            <h4 className="h-[15px] text-[10px] font-bold uppercase leading-[15px] tracking-[1.5px]">
              Info
            </h4>
            <div className="flex flex-col gap-5">
              <Link to="/support">Support</Link>
              <Link to="/customer-service">Customer Service</Link>
              <Link to="/get-started">Get Started</Link>
            </div>
          </div>
          <div className="flex w-[46%] flex-col gap-5 sm:w-[174px]">
            <h4 className="h-[15px] text-[10px] font-bold uppercase leading-[15px] tracking-[1.5px]">
              Follow us
            </h4>
            <div className="flex flex-row gap-5">
              <a
                href="https://www.facebook.com/MenofManual"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Facebook" className="size-6" />
              </a>
              <a
                href="https://www.manual.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={google} alt="Google" className="size-6" />
              </a>
              <a
                href="https://x.com/MenofManual"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="Twitter" className="size-6" />
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div className="w-full justify-items-center border-t border-primary-300 p-6">
        <div className="text-base leading-[30px] text-primary-200">
          © 2021 Manual. All rights reserved
        </div>
      </div>
    </footer>
  );
}
