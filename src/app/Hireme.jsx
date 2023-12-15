"use client";
import React, { useEffect, useState } from "react";
import arrow from "../../public/down-arrow.png";
import Image from "next/image";
import { animate, motion } from "framer-motion";
import styled from "@emotion/styled";
import { ArrowUpward } from "@mui/icons-material";

const Container = styled.div`
  cursor: pointer;
  position: relative;
  right: 0;
  left: 85%;
  margin-top: -12.5rem;
  rotate: 90deg;
  padding: 0.3125rem;
  display: flex;
  align-items: center;
  width: 16.85rem;
  height: 1.875rem;
  font-size: 1.2rem;
  color: #000;
  @media (max-width: 37.5rem) {
    display: none;
  }
`;
const Hireme = () => {
  return (
    <Container
      onClick={() => {
        window.scrollTo(0, document.body.scrollHeight);
      }}
    >
      <span>CONNECT WITH ME</span>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 50 }}
        transition={{ ease: "linear", duration: 1.2, repeat: Infinity }}
      >
        <Image
          alt="arrow pointing downwards"
          style={{
            marginLeft: "2.5rem",
            width: "0.9375rem",
            height: "6.25rem",
            rotate: "-90deg",
          }}
          src={arrow}
        />
      </motion.div>
    </Container>
  );
};

const Button = styled.button`
  cursor: pointer;
  position: fixed;
  margin: 1.25rem;
  
  z-index: 15;
  bottom: 0;
  right: 0;
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  color: #fff;
  background: #d5c5ff;
  border: none;
  outline: none;
  .btnArrow {
    color: #fff;
  }
  @media (max-width:31.25rem) {
    margin-bottom: 80px;
  }
`;
const ScrollTop = () => {
  const [height, setHeight] = useState(0);
  const getHeight = () => {
    setHeight(document.documentElement.scrollTop);
    console.log(height);
  };
  window.onscroll = function () {
    getHeight();
  };
  return (
    <Button
      // initial={{ opacity: 0, y: 200 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 2, ease: "easeIn" }}
      // whileInView={{ once: false }}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      style={{
        display: height > 600 ? "block" : "none",
      }}
    >
      <ArrowUpward className="btnArrow" />
    </Button>
  );
};
export default Hireme;
export { ScrollTop };
