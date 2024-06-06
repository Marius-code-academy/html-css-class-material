import styles from "./Input.module.css"
import classnames from "classnames"

export default function Input({ label, id, onChange, type, bigFont }) {

  console.log(bigFont && styles.fontSize);

  return (
    <div className={classnames(styles.border, bigFont && styles.fontSize)}>
      <label htmlFor={id}>{label}</label>
      <input type={type} onChange={onChange} id={id}/>
    </div>
  )
}
