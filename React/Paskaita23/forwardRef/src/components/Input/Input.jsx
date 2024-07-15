import { forwardRef } from "react";

const Input = forwardRef(({ value }, ref) => {
  return <input ref={ref} type="text" value={value}/>;
});

Input.displayName = "Input";

export default Input;
