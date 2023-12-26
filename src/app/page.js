import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Navbar";
import squi from "../../public/squi.png";
import dothr from "../../public/dothr.png";
// import dot1 from "../../public/dot1.png";
import TopName from "./TopName";
// import org1 from "../../public/org1.png";
import org2 from "../../public/org2.png";
import Hireme, { ScrollTop } from "./Hireme";
import About from "./About";
import Projects from "./Projects";
// import Contact from "./Contact";
// import Resume from "./Resume";
// import NewCards from "./NewCards";
import NewContact from "./NewContact";
import ResumeNew from "./ResumeNew";

const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.hero_wrapper}>
          <TopName />
          <div className={styles.imgwrapper}>
            <Image
              alt="an img"
              priority={true}
              src={org2}
              style={{
                position: "relative",
                borderRadius: "30px 30px 0px 30px",
                marginTop: "-20px",
                marginRight: "20px",
                // width: "320px",
                // height: "390px",
                width: "300px",
                height: "450px",
                borderRadius: "30%",
                // filter: "contrast(1%)",
                // position: "absolute",
                // right: 0,
              }}
            />
            <Image
              alt="a design element"
              src={squi}
              style={{
                position: "relative",
                top: -300,
                right: 40,
                // filter: "invert(90%) blur(1px)",
                width: "100px",
                height: "100px",
              }}
            />
            <Image
              alt="a design"
              src={dothr}
              style={{
                position: "relative",
                bottom: "90px",
                left: "-100px",
                rotate: "180deg",
                width: "100px",
                height: "100px",
              }}
            />
          </div>
        </div>
        <Hireme />
        
      </main>
      {/* <NewCards/> */}
      <Projects />
      <About />
      <ResumeNew />
      <NewContact/>
      <ScrollTop/>
      {/* <Contact /> */}
    </>
  );
};
export default Home;
