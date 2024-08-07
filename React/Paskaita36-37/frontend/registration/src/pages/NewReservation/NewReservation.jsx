import axios from "axios";
import NewReservationForm from "../../components/NewReservationForm/NewReservationForm";

const API_HOST = import.meta.env.VITE_API_HOST;

export default function NewReservation() {

  async function handleSubmit(body) {
    await axios.post(API_HOST + "reservations", body);
  }

  return (
    <div>
      <NewReservationForm onSubmit={handleSubmit}/>
    </div>
  )
}
