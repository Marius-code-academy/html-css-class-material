import reactDom from "react-dom";
import NewReservationForm from "../NewReservationForm/NewReservationForm";
import axios from "axios";

const API_HOST = import.meta.env.VITE_API_HOST;

export default function UpdateReservationModal({ reservationData, refetchData, onClose }) {

  async function updateReservation(body) {
    try {
      await axios.put(API_HOST + `reservations/${reservationData._id}`, body)
      refetchData()
      onClose()
    } catch (error) {
      alert(error.message)
    }
  }

  return reactDom.createPortal(
    <div>
      <NewReservationForm onSubmit={updateReservation} reservationData={reservationData}/>
    </div>,
    document.body,
  );
}
