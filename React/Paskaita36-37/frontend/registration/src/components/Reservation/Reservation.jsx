export default function Reservation({ reservationData }) {
  return <tr>
    <td>{reservationData.name}</td>
    <td>{reservationData.phone}</td>
    <td>{reservationData.reservationDate}</td>
  </tr>;
}
