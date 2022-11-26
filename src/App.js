import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes/Routes";
import React from "react";

function App() {
  return (
    <div className="max-w-[1440px] mr-16 ml-16  ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
