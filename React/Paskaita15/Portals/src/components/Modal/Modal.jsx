import { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import ReactDom from "react-dom";

export default function Modal({ children, handleClose, open }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  if (!isOpen) {
    return undefined;
  }

  function handleOverlayClick() {
    setIsOpen(false);
    handleClose();
  }

  function handleContentClick(e) {
    e.stopPropagation()
  }

  return ReactDom.createPortal(
    <div onClick={handleOverlayClick} className={styles.overlay}>
      <div onClick={handleContentClick} className={styles.content}>{children}</div>
    </div>,
    document.querySelector("#modal-container"),
  );
}
