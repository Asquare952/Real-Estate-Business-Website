"use client";

import Hero from "./Hero";
import SearchInput from "./SearchInput";
const PropertiesPage = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <SearchInput/>
      </div>
    </div>
  );
};

export default PropertiesPage;
