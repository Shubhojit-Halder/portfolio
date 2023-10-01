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
        justifyContent: "center",
        alignItems: "center",
        width: "220px",
        height:"30px",
        fontSize:"16px"
      }}
    >
      Want to hire me{" "}
      <Image
        style={{
          marginLeft: "20px",
          width: "10px",
          height: "50px",
          filter: "invert(90%)",
          rotate: "-90deg",
        }}
        src={arrow}
        alt="an arrow"
      />
    </div>
  );
};

export default Hireme;
