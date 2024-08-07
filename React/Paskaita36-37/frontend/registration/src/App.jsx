import { Route, Routes } from "react-router-dom"
import Reservations from "./pages/Reservations/Reservations"
import NewReservation from "./pages/NewReservation/NewReservation"

function App() {
  return (
    <Routes>
      <Route path="/reservations" element={<Reservations />}/>
      <Route path="/reservations/new" element={<NewReservation />}/>
    </Routes>
  )
}

export default App
