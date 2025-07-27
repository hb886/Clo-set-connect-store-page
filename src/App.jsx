import React from "react";
// import './App.css'
import Filter from "./Components/Filter/Filter";
import SearchBar from "./Components/SearchBar/SearchBar";
import Product from "./Components/Product/Product";
import Header from "./Components/Header/Header";

function App() {

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      width: "100%",
      boxSizing: "border-box",
      padding: "0 1rem"
    }}>
      <Header />
      <SearchBar />
      <Filter />
      <Product />
    </div>
  );
}

export default App;
