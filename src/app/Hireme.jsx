"use client";
import React from "react";
import arrow from "../../public/down-arrow.png";
import Image from "next/image";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const Container = styled.div`
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
  @media(max-width:37.5rem) {
    display: none;
  }
`;
const Hireme = () => {
  return (
    <Container>
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

export default Hireme;
