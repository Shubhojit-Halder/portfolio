import React from "react";
import arrow from "../../public/down-arrow.png";
import Image from "next/image";
const Hireme = () => {
  return (
    <div
      style={{
        position: "relative",
        right:0,
        left:"85%",
        marginTop:"-12.5rem",
        rotate: "90deg",
        padding: "0.3125rem",
        display: "flex",
        alignItems: "center",
        width: "13.75rem",
        height:"1.875rem",
        fontSize:"1.3rem",
        color:"#000",
      }}
    >
      Want to hire me{" "}
      <Image
      // alt="arrow pointing downwards"
        style={{
          marginLeft: "2.5rem",
          width: "0.9375rem",
          height: "6.25rem",
          rotate: "-90deg",
        }}
        src={arrow}
        alt="an arrow"
      />
    </div>
  );
};

export default Hireme;
