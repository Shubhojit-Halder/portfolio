"use client";
import styled from "styled-components";
import styles from "./pages/styles/Resume.module.css";
import edu from "../../public/mortarboard.gif";
import codeSp from "../../public/codeSp.gif";
import job from "../../public/job.gif";
import trophy from "../../public/trophy.gif";
import profile from "../../public/user-profile.gif";
import Image from "next/image";
import Typography from "@mui/joy/Typography";
import CircularProgress from "@mui/joy/CircularProgress";
import react from "../../public/react.png";
import c from "../../public/c.png";
import node from "../../public/node.png";
import exp from "../../public/expressjs.png";
import python from "../../public/python.png";
import js from "../../public/js.png";
import html from "../../public/html.png";
import css from "../../public/css.png";
import mysql from "../../public/mysql.png";
import mongo from "../../public/mongo.png";
const EduData = [
  {
    name: "Meghnad Saha Institute of Technology",
    sp1: "B.Tech in ECE",
    sp2: "2020-24",
    gpa: "9.13 CGPA",
  },
  {
    name: "Behala High School(H.S.)",
    sp1: "Higher Secondary",
    sp2: "2018-20",
    gpa: "92%",
  },
];
const ExpData = [
  {
    name: "Settyl Inc.",
    sp1: "Intern-FullStack Developer",
    sp2: "February-March, 2024",
    gpa: "",
  },
  {
    name: "Megatronix",
    sp1: "Volunteer-Website Developer",
    sp2: "October,2022-Present",
    gpa: "",
  },
];
const Achievements = [
  {
    name: "Winner - Smart India Hackthon",
    sp1: "Software edition",
    sp2: "June,2022 - August,2022",
    gpa: "",
  },
  {
    name: "Winner - TechXtra,2021",
    sp1: "Web development competition",
    sp2: "July,2021",
    gpa: "",
  },
];

const CardWrapper = styled.div`
  width: 15.625rem;
  height: 200px;
  border: 2px solid #000;
  margin: 20px 10px;
  border-radius: 10px;
  position: relative;
  padding: 30px 10px;
`;
const ResumeWrapper = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .rows {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .box {
    margin-bottom: 0.9375rem;
    .heading {
      font-weight: 600;
    }
    .content {
      font-size: 0.85rem;
      /* display: flex;
      justify-content: space-between; */
      span {
        color: #33cccc;
      }
    }
  }
`;
const Card = ({ topImg, cardData = [] }) => {
  return (
    <CardWrapper>
      <Image
        src={topImg}
        style={{
          width: "3.75rem",
          height: "3.75rem",
          borderRadius: "50%",
          position: "absolute",
          top: -30,
          left: "5.7813rem",
        }}
        alt="logo"
      />
      {cardData.map((data, id) => {
        return (
          <div className="box" key={data.name + id}>
            <div className="heading">{data.name}</div>
            <div className="content">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{data.sp1}</span>
                <span>{data.gpa}</span>
              </div>
              <div>{data.sp2}</div>
            </div>
          </div>
        );
      })}
    </CardWrapper>
  );
};
const ResumeNew = () => {
  return (
    <>
      <div id="resume">
        <h1 className={styles.header}>RESUME</h1>
        <ResumeWrapper>
          <div className="rows">
            <Card topImg={edu} cardData={EduData} />
            <Card topImg={job} cardData={ExpData} />
          </div>
          <div className="rows">
            <Card topImg={trophy} cardData={Achievements} />
            <CardWrapper>
              <Image
                src={codeSp}
                style={{
                  width: "3.75rem",
                  height: "3.75rem",
                  borderRadius: "50%",
                  position: "absolute",
                  top: -30,
                  left: "5.7813rem",
                }}
                alt="logo"
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { img: c, val: 90 },
                  { img: js, val: 85 },
                  { img: python, val: 70 },
                  { img: react, val: 85 },
                  { img: node, val: 80 },
                  { img: exp, val: 80 },
                  { img: mysql, val: 85 },
                  { img: mongo, val: 87 },
                  { img: html, val: 93 },
                  { img: css, val: 90 },
                ].map((data, id) => {
                  return (
                    <CircularProgress
                      key={id + data}
                      size="md"
                      determinate
                      value={data.val}
                      sx={{ color: "#33cccc", margin: "5px" }}
                    >
                      <Image src={data.img} width={20} height={20} alt="logo" />
                    </CircularProgress>
                  );
                })}
              </div>
            </CardWrapper>
            {/* <CardWrapper>
            <Image
              src={profile}
              style={{
                width: "3.75rem",
                height: "3.75rem",
                borderRadius: "50%",
                position: "absolute",
                top: -30,
                left: "5.7813rem",
              }}
              alt="logo"
            />
          </CardWrapper> */}
            {/* <Card topImg={codeSp} />
          <Card topImg={profile} /> */}
          </div>
        </ResumeWrapper>
      </div>
    </>
  );
};

export default ResumeNew;
