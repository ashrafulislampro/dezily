import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import Mobile from "./Mobile.js";
import { navLinks } from "./NavLink.js";
const { page, services, portfolio, blog } = navLinks[0];

const Navigation = () => {
  return (
    <>
      <nav className="bg-[#000000af] font-medium">
        <div className="flex justify-around items-center">
          <div>
            <img
              src="https://themetechmount.com/html/dezily/images/logo-img.svg"
              alt=""
            />
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center space-x-6 ">
              <Link to="/" className="uppercase text-white flex py-8 ">
                Home
              </Link>
              <div className="cursor-pointer relative group">
                <Link to="/" className="uppercase text-white  py-8">
                  pages
                  <div className="nav-card nav-card-mt">
                    <ul className="nav-ul border-light-blue">
                      {page.map((p, index) => (
                        <li key={index}>
                          <Link className="nav-link" to={p.link}>
                            {p.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </div>
              <div className="cursor-pointer relative  group">
                <Link to="/" className="uppercase text-white  py-8">
                  services
                  <div className="nav-card nav-card-mt">
                    <ul className="nav-ul border-light-blue">
                      {services.map((p, index) => (
                        <li key={index}>
                          <Link className="nav-link" to={p.link}>
                            {p.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </div>
              <div className="cursor-pointer relative  group">
                <Link to="/" className="uppercase text-white  py-8">
                  portfolio
                  <div className="nav-card nav-card-mt">
                    <ul className="nav-ul border-light-blue">
                      {portfolio.map((p, index) => (
                        <li key={index}>
                          <Link className="nav-link" to={p.link}>
                            {p.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </div>
              <div className="cursor-pointer relative  group">
                <Link to="/" className="uppercase text-white  py-8">
                  blog
                  <div className="nav-card nav-card-mt">
                    <ul className="nav-ul border-light-blue">
                      {blog.map((p, index) => (
                        <li key={index}>
                          <Link className="nav-link" to={p.link}>
                            {p.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </div>
              <Link
                to="/contact"
                className="text-white uppercase  cursor-pointer py-8"
              >
                Contact US
              </Link>
            </div>
          </div>
          <div className="flex items-center text-white">
            <FiPhoneCall className="mr-2 text-light-blue w-10 h-10" />
            <div className="text-left">
              <p>Call Us Now!</p>
              <p>+123 456 7890</p>
            </div>
          </div>
        </div>
      </nav>
      <div className="lg:hidden">
        <Mobile />
      </div>
    </>
  );
};

export default Navigation;