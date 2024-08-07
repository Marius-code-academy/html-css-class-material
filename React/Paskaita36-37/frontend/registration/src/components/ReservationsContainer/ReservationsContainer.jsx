import { useEffect, useState } from "react";
import axios from "axios";
import Reservation from "../Reservation/Reservation";

const API_HOST = import.meta.env.VITE_API_HOST;

export default function ReservationsContainer() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios
      .get(API_HOST + "reservations")
      .then((response) => setReservations(response.data))
      .catch((err) => alert("Something went wrong"));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Vardas</th>
          <th>Tel.</th>
          <th>Reservation Date</th>
        </tr>
      </thead>
      <tbody>
        {reservations.map((reservation) => (
          <Reservation key={reservation._id} reservationData={reservation} />
        ))}
      </tbody>
    </table>
  );
}
