import styles from "./Button.module.css"

export default function Button(props) {
  // console.log(styles);
  const { onClick, text } = props;

  return (
    <button className={styles.border} onClick={onClick}>{text}</button>
  )
}
