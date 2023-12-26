"use client";
import styled from "styled-components";
import styles from "./pages/styles/Resume.module.css";
import edu from "../../public/mortarboard.gif";
import codeSp from "../../public/codeSp.gif";
import job from "../../public/job.gif";
import profile from "../../public/user-profile.gif";
import Image from "next/image";
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
  {
    name: "Behala High School(H.S.)",
    sp1: "Secondary",
    sp2: "2012-18",
    gpa: "90%",
  },
];
const CardWrapper = styled.div`
  width: 15.625rem;
  height: 270px;
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
          <div className="box">
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
      <h1 className={styles.header}>RESUME</h1>
      <ResumeWrapper>
        <div className="rows">
          <Card topImg={edu} cardData={EduData} />
          <Card topImg={job} />
        </div>
        <div className="rows">
          <Card topImg={codeSp} />
          <Card topImg={profile} />
        </div>
      </ResumeWrapper>
    </>
  );
};

export default ResumeNew;
