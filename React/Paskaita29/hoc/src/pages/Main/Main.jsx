import Counter from "../../components/Counter/Counter";
import withAuth from "../../components/withAuth"

function Main({ name }) {

  const someString = "ask,djfn";

  return (
    <div>
      <h1>Main Page</h1>
      <h1>{name}</h1>
      <Counter stuff={<p>stuff</p>} render={(value) => {
        return <h1>{someString} {value}</h1>
      }}/>

      <Counter render={(value) => {
        return <p>{value}</p>
      }}/>
    </div>
  )
}

const MainWithAuth = withAuth(Main);

export default MainWithAuth;