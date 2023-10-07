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
        marginTop:"-200px",
        rotate: "90deg",
        padding: "5px",
        display: "flex",
        alignItems: "center",
        width: "220px",
        height:"30px",
        fontSize:"1.3rem",
        color:"#000"
      }}
    >
      Want to hire me{" "}
      <Image
        style={{
          marginLeft: "40px",
          width: "15px",
          height: "100px",
          rotate: "-90deg",
        }}
        src={arrow}
        alt="an arrow"
      />
    </div>
  );
};

export default Hireme;
