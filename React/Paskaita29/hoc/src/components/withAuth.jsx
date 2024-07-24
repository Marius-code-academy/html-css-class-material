import { Navigate } from "react-router-dom"

const withAuth = (Component) => {

  const WrappedComponent = (props) => {
    if (!localStorage.getItem("token")) {
      return <Navigate to={"/login"}/>
    }

    return <Component {...props}/>
  }

  return WrappedComponent;
}

export default withAuth;