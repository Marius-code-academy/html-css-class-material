import { Link } from "react-router-dom"

export default function ContactsPage() {
  return (
    <div>
      <Link to={"/home"}>Go to home page</Link>
      <h1>Contacts</h1>
      <ul>
        <li>Tel: 35165153</li>
        <li>email: asdfas@asdfasdf.lt</li>
        <li>address: vilnius 852</li>
      </ul>
    </div>
  )
}
