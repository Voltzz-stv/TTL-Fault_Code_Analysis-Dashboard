import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <form>
        <div className={styles.navbar}>
          <div className={styles.date}>
            <i className={styles.i}></i>
            <input type="date" name="date" id="date" />
          </div>
          <div className={styles.dropdown}>
            <i class="fa-solid fa-clipboard"></i>
            <select className={styles.select} name="dropdown" id="dropdown">
              <option value="1 Selected">1 Selected</option>
              <option value="2 Selected">2 Selected</option>
              <option value="3 Selected">3 Selected</option>
              <option value="4 Selected">4 Selected</option>
            </select>
          </div>
          <div className={styles.outterImgCircle}>
            <div className={styles.innerImgCircle}>
              <img
                className={styles.img}
                src="https://listcarbrands.com/wp-content/uploads/2017/10/2017-logo-Tata-Motors-768x491.jpg"
                alt="someimage"
              />
            </div>
          </div>
          <div className={styles.text}>
            <i className="fa-solid fa-van-shuttle"></i>
            <input type="text" placeholder="Enter vin" />
          </div>
          <div className={styles.button}>
            <button type="" className={styles.submitBtn}>
              Submit
            </button>
            <button className={styles.resetBtn}>Reset</button>
          </div>
        </div>
      </form>
    </nav>
  );
}
