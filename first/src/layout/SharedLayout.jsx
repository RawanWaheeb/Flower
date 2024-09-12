

import React from "react";
import { MyNav } from "../component/MyNav";
import { Fotter } from "../component/Fotter";
import { Outlet } from "react-router-dom";
import "./SharedLayout.css";

export function SharedLayout() {
  return (
    <div className="layout">
      <MyNav />
      <div className="content">
        <Outlet />
      </div>
      <Fotter />
    </div>
  );
}














