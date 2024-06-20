import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("Dabar turetu numesti i home route");
      navigate("/home")
    }, 5000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div>
      <h1>404 Page not found</h1>
    </div>
  )
}
