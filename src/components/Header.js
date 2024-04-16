import React from "react";
import { logo } from "../assets";
import { HiOutlineMenu, HiOutlineShoppingBag } from "react-icons/hi";
import { MdClose, MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

const Header = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const [toggleMenu, setToggleMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const locationRoute = (route) => {
    if (location.pathname === route) {
      return true;
    }
  };




  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.length > 0) {
      navigate(`/search/${searchQuery}`);
    }
    setSearchOpen(false);
  };

  return (
    <>
      <nav className="w-full h-full flex items-center justify-between px-5 xl:px-10 py-5">
        <section className="w-full h-full flex items-center justify-start gap-5 sm:gap-10 xl:gap-20">
          <Link to="/" >
          <img
            src={logo}
            alt="Urban-Hive logo"
            className="w-32 object-cover object-center"
          />
          </Link>
          <ul className="hidden lg:flex items-center justify-center gap-10  text-base font-weight-450 text-gray-600">
          <Link
              to="/"
              className={`${
                locationRoute("/") ? "text-gray-900 font-semibold" : ""
              }`}
            >
              <li>Shop</li>
            </Link>
            <Link
              to="/products/men"
              className={`${
                locationRoute("/products/men")
                  ? "text-gray-900 font-semibold"
                  : ""
              }`}
            >
              <li>Men</li>
            </Link>
            <Link
            to="/products/women"
            className={`${
              locationRoute("/products/women")
                ? "text-black-100 font-semibold"
                : ""
            }`}
            >

            <li>Women</li>
            </Link>
            
            <Link
              to="/products/kids"
              className={`${
                locationRoute("/products/kids")
                  ? "text-black-100 font-semibold"
                  : ""
              }`}
            >
              <li>Kids</li>
            </Link>
          </ul>
        </section>
        <section className="w-full h-full flex items-center justify-end gap-5 sm:gap-10">
          <form className="hidden sm:flex items-center bg-slate-100 px-3 py-2 gap-2"
          onSubmit={handleSearch} >
            <AiOutlineSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-light-gray rounded outline-none border-none"
            />
          </form>
          <div className="relative hidden lg:block">
            <MdOutlineFavoriteBorder className=" cursor-pointer w-6 h-6 text-light-gray" />
            <span className="w-5 h-5 absolute -top-3 -right-3 bg-red-500 text-white rounded-full flex justify-center items-center text-sm p-2">
              {/* {favItems.length} */}6
            </span>
          </div>
          <div className="relative hidden lg:block">
            <HiOutlineShoppingBag className="cursor-pointer w-6 h-6 text-light-gray" />
            <span className="w-5 h-5 absolute -top-3 -right-3 bg-red-500 text-white rounded-full flex justify-center items-center text-sm p-2">
              2
            </span>
          </div>
          <section className="block sm:hidden">
            <AiOutlineSearch
              className="text-black-100 w-5 h-5 cursor-pointer"
            onClick={() => setSearchOpen(true)}
            />
            {searchOpen && (
              <form
                className={`absolute top-0 left-0 z-50 w-full  py-6 bg-white flex items-center justify-between px-10 gap-2 ${searchOpen ? "search-bar-fade-in" : "search-bar-fade-out"
                  }`}
              // onSubmit={handleSearch}
              >
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent placeholder:text-light-gray text-light-gray border-none outline-none"
                />
                <MdClose
                  className="w-6 h-6 text-light-gray cursor-pointer"
                  onClick={() => setSearchOpen(false)}
                />
              </form>
            )}
          </section>
          <nav className="block lg:hidden">
            {toggleMenu ? (
              <MdClose
                className="w-6 h-6 text-light-gray cursor-pointer"
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <HiOutlineMenu
                className="w-6 h-6 text-light-gray cursor-pointer"
                onClick={() => setToggleMenu(true)}
              />
            )}
            {
              toggleMenu && (
                <div className=" bg-white absolute top-20 right-0 w-48 h-fit slide-left shadow-xl rounded-bl z-20">
                  <ul className="flex flex-col items-start justify-center gap-5 py-5 px-5 font-satoshi text-base font-normal text-light-gray-100">
                    <li>Shop</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>My Wishlist</li>
                    <li>My Cart Items</li>
                  </ul>
                </div>
              )
            }
          </nav>
        </section>
      </nav>
    </>
  );
};

export default Header;
