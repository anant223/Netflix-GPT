import React from "react";
import { Container, Logout } from "../Main";


function Footer() {
  return (
    <footer className=" text-gray-400 sm:py-[80px] py-[50px] border-t-8 border-gray-800 bg-black relative">
      <Container>
        <div className=" sm:px-[80px] px-[40px] ">
          <div>
            Questions? Call
            <a href="0000-800-919-1694">0000-800-919-1694</a>
          </div>
          <div className="grid mt-[10px] sm:grid-cols-4 grid-cols-2">
            <ul>
              <li>
                <a href="faq">FAQ</a>
              </li>
              <li>
                <a href="faq">Investor Relation</a>
              </li>
              <li>
                <a href="faq">
                  <Logout />
                </a>
              </li>
              <li>
                <a href="faq">Speed Test</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="faq">Help Centre</a>
              </li>
              <li>
                <a href="faq">Jobs</a>
              </li>
              <li>
                <a href="faq">Cookies Preferences</a>
              </li>
              <li>
                <a href="faq">Legal Noties</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="faq">Account</a>
              </li>
              <li>
                <a href="faq">Ways to Watch</a>
              </li>
              <li>
                <a href="faq">Corporate Information</a>
              </li>
              <li>
                <a href="faq">Only on Netflix</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="faq">Media Center</a>
              </li>
              <li>
                <a href="faq">Terms of Use</a>
              </li>
              <li>
                <a href="faq">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
