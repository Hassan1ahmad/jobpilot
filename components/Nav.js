"use client";
import React, { useState } from "react";
import "../app/css/nav.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Nav() {
  const pathname = usePathname();

  const countries = [
    "USA",
    "Canada",
    "UK",
    "Australia",
    "Germany",
    "France",
    "Japan",
  ];

  // State to manage selected country
  const [selectedCountry, setSelectedCountry] = useState("");

  // State to manage search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle country selection
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter countries based on search query
  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="nav-wrapper ">
      <div className="navLinks h-12 w- bg-gray-100 ">
        <ul className="flex space-x-8">
          <li className={`link ${pathname === "/" ? "active" : ""}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`link ${pathname === "/about" ? "active" : ""}`}>
            <Link href="/about">About us</Link>
          </li>
          <li className={`link ${pathname === "/jobs" ? "active" : ""}`}>
            <Link href="/findjobs">Find Jobs</Link>
          </li>
          <li className={`link ${pathname === "/support" ? "active" : ""}`}>
            <Link href="/comingSoon">Customer Supports</Link>
          </li>
        </ul>
      </div>
      <div className="searchBar">
        <div className="logo">
          <div className="logo-text">
            <Image
              width={40}
              height={40}
              src="/assets/briefcase 1.png"
              alt=""
            />
            <p>Jobpilot</p>
          </div>
          <div className="search-container flex    ">
            <div className="country-dropdown">
              <select
                value={selectedCountry}
                onChange={(e) => handleCountrySelect(e.target.value)}
              >
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="search-bar flex items-center">
              <input
                type="search"
                placeholder="Job tittle, keyword, company"
                value={searchQuery}
                onChange={handleSearchChange}
              />
             <Link 
      href={{
        pathname: "/findjobs/jobSearch",
        query: { searchQuery },
      }}
      passHref
    >     
        <button  >
          <Image
            height={20}
            width={20}
            src="/assets/fi_search.png"
            alt="Search"
          />
        </button>
      
    </Link>
            </div>
          </div>
        </div>
        <div className="bar-buttons flex gap-5 max-sm:justify-center">
        <Link href='/comingSoon'>
          <button className="signIn-button hover:bg-sky-100">Sign In</button>  
          </Link>
        <Link href='/comingSoon'>
          <button className="post-button">Post A Job</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
