import withAuth from "../../components/withAuth"

function Contacts() {
  return (
    <div>
      <h1>Contacts page</h1>
    </div>
  )
}

const ContactsWithAuth = withAuth(Contacts);

export default ContactsWithAuth;