import React from "react";
import { Link } from "./BillBourdElement";

const BillBoard = () => {
  return (
    <>
      <Link href="/">
        <img
          src="https://edoctor.io/assets/banners/banner_desktop_27072021.png"
          style={{ height: "64px" }}
          alt="billboard"
        />
      </Link>
    </>
  );
};

export default BillBoard;
