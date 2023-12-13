import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Navbar";
import squi from "../../public/squi.png";
import dothr from "../../public/dothr.png";
import dot1 from "../../public/dot1.png";
import TopName from "./TopName";
import org1 from "../../public/org1.png";
import org2 from "../../public/org2.png";
import Hireme from "./Hireme";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";

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
              alt="a design element"
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
          {/* <BoxComp /> */}
        </div>
        <Hireme />
        {/* <Image
          src={dot1}
          style={{
            position: "relative",
            // bottom: 0,
            top: 100,
            left: -50,
            rotate: "180deg",
            filter: "grayscale(100%)",
            opacity: 0.4,
            width: "250px",
            height: "250px",
          }}
        /> */}
      </main>
      <About />
      <Resume />
      <Projects />
      <Contact />
    </>
  );
};
export default Home;
