import { Navbar } from "./components/Navbar/Navbar"
import { ShopBody } from "./components/ShopBody/ShopBody"

import axios from "axios";
import { Component, useEffect, useState } from "react";

import { ItemProps } from "./type/ItemType";

function App() {

  return (
    <>
      <Navbar />
      <ShopBody />
    </>
  )
}

export default App
