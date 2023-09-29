import Image from "next/image";
import styles from "./page.module.css";
import Left from "./Left";
import Right from "./Right";
import Navbar from "./Navbar";
import myImg from "../../public/my.png";
import squi from "../../public/squi.png";
import dothr from "../../public/dothr.png";
import TopName from "./TopName";
const Home = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <TopName />
      <div className={styles.imgwrapper}>
        <Image
          src={myImg}
          style={{
            borderRadius: "30px 30px 0px 30px",
            marginTop: "-20px",
            marginRight: "20px",
            filter: "contrast(115%)",
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
            filter: "invert(100%) ",
            width: "100px",
            height: "100px",
          }}
        />
      </div>
      
    </main>
  );
};
export default Home;
