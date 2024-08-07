import axios from "axios";
import UpdateReservationModal from "../UpdateReservationModal/UpdateReservationModal";
import { useState } from "react";

const API_HOST = import.meta.env.VITE_API_HOST;

export default function Reservation({ reservationData, refetchData }) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  async function handleDelete() {
    const shouldDelete = confirm(`Ar tikrai nori istrinti ${reservationData.name} rezervacija laikui ${reservationData.reservationDate}`);

    if (shouldDelete) {
      try {
        await axios.delete(API_HOST + `reservations/${reservationData._id}`);
        refetchData();
      } catch (error) {
        alert(error.message);
      }
    }
  }

  return (
    <>
      <tr>
        <td>{reservationData.name}</td>
        <td>{reservationData.phone}</td>
        <td>{reservationData.reservationDate}</td>
        <td>
          <button onClick={handleDelete}>Delete</button>
        </td>
        <td>
          <button onClick={() => setShowUpdateModal(true)}>Update</button>
        </td>
      </tr>
      {showUpdateModal && <UpdateReservationModal refetchData={refetchData} reservationData={reservationData} onClose={() => setShowUpdateModal(false)} />}
    </>
  );
}
