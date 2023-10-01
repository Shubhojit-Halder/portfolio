import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Navbar";
import myImg from "../../public/my.png";
import squi from "../../public/squi.png";
import dothr from "../../public/dothr.png";
import dot1 from "../../public/dot1.png";
import TopName from "./TopName";
import BoxComp from "./BoxComp";
import org1 from "../../public/org1.png";
import Hireme from "./Hireme";
import About from "./About";
const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <Navbar />
        <TopName />
        <div className={styles.imgwrapper}>
          <Image
            src={org1}
            style={{
              borderRadius: "30px 30px 0px 30px",
              marginTop: "-20px",
              marginRight: "20px",
              width: "320px",
              height: "390px",
              // filter: "contrast(1%)",
              // position: "absolute",
              // right: 0,
            }}
          />
          <Image
            src={squi}
            style={{
              position: "absolute",
              top: 0,
              filter: "invert(90%) blur(1px)",
              width: "100px",
              height: "100px",
            }}
          />
          <Image
            src={dothr}
            style={{
              position: "absolute",
              bottom: "-100px",
              rotate: "180deg",
              filter: "invert(100%)",
              width: "100px",
              height: "100px",
            }}
          />
        </div>
        <BoxComp />
        <Image
          src={dot1}
          style={{
            position: "absolute",
            bottom: 0,
            left: -50,
            rotate: "180deg",
            filter: "invert(40%)",
            opacity: 0.4,
            width: "200px",
            height: "200px",
          }}
        />
        <Hireme />
      </main>
      <About />
    </>
  );
};
export default Home;
