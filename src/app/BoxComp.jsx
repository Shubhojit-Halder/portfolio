
import styles from "./pages/styles/BoxComp.module.css";

const BoxComp = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>Introduction</div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          corporis placeat accusantium dolores commodi veritatis cupiditate,
          suscipit aut delectus quibusdam, doloremque et pariatur aliquam
          laudantium maxime repellendus velit autem quae
        </div>
      </div>
    </>
  );
};

export default BoxComp;
