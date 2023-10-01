import React from "react";
import arrow from "../../public/down-arrow.png";
import Image from "next/image";
const Hireme = () => {
  return (
    <div
      style={{
        position: "absolute",
        right: 0,
        marginTop: "100px",
        rotate: "90deg",
        // border: "1px solid white",
        padding: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "220px",
        height:"30px",
        bottom:"150px",
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
