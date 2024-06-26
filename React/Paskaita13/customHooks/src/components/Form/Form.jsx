import { useDisappearingElement } from "../../hooks/useDisappearingElement";
import { useInput } from "../../hooks/useInput";

export default function Form() {
  const name = useInput("Name");
  const email = useInput("Email");
  const elementRef = useDisappearingElement();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`name: ${name.value} email: ${email.value}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 ref={elementRef}>As pradingstu</h1>
        <input type="text" {...name} /> <br />
        <input type="text" {...email} /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
