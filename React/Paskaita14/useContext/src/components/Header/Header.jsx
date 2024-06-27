import styles from "./Header.module.css";
import { useSettingsContext } from "../Context/SettingsContextProvider";

export default function Header() {
  const { setShow } = useSettingsContext();

  function handleChange(e) {
    setShow(e.target.value);
  }

  return (
    <div className={styles.header}>
      <img src="https://th.bing.com/th/id/OIP.Sc-pGDkmKH6dLZgbWk-3uAAAAA?rs=1&pid=ImgDetMain" alt="" />
      <select onChange={handleChange}>
        <option value="show">Show</option>
        <option value="no">Dont Show</option>
      </select>
    </div>
  );
}
