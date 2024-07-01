import styles from "./ConfirmModal.module.css";
import ReactDom from "react-dom";

export default function ConfirmModal({ text, onConfirm, onCancel }) {
  return ReactDom.createPortal(
    <div className={styles.modal}>
      <p>{text}</p>
      <button onClick={onConfirm}>Confirm</button>
      <button onClick={onCancel}>Cancel</button>
    </div>,
    document.querySelector("#modal-container"),
  );
}
