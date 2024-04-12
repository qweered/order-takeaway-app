import Logo from "@/assets/icons/logo.svg?react";
import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="w-4/5 mx-auto">
        <div className="flex justify-around font-inter font-inter text-slate-500 font-normal mb-10">
          <div className="flex flex-col justify-start gap-4">
            <div className="w-9 h-11">
              <Logo />
            </div>
            <p className="w-60 text-base leading-relaxed tracking-tight">
              Takeaway & Delivery template&nbsp;for small - medium businesses.
            </p>
          </div>
          <ul className="flex flex-col gap-7 items-start text-sm ">
            <li className="tracking-widest uppercase text-zinc-950">Company</li>
            <li className="">Home</li>
            <li>Order</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
          <ul className="flex flex-col items-start gap-7 leading-5 text-sm ">
            <li className="tracking-widest uppercase text-zinc-950">
              Template
            </li>
            <li>
              <a href="https://google.com">Style Guide</a>
            </li>
            <li>
              <a href="https://google.com">Changelog</a>
            </li>
            <li>
              <a href="https://google.com">Licenses</a>
            </li>
            <li>
              <a href="https://google.com">Webflow University</a>
            </li>
          </ul>
          <ul className="flex flex-col items-start gap-7 leading-5 text-sm ">
            <li className="tracking-widest uppercase text-zinc-950">
              Flowbase
            </li>
            <li>More Cloneables</li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
