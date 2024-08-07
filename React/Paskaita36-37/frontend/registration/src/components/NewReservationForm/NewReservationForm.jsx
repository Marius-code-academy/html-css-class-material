import { useState } from "react";

export default function NewReservationForm({ onSubmit, reservationData }) {
  const [name, setName] = useState(reservationData.name);
  const [registrationDate, setRegistrationDate] = useState(reservationData.reservationDate);
  const [tel, setTel] = useState(reservationData.phone);

  async function handleOnSubmit(e) {
    e.preventDefault();

    const dateToSend = registrationDate.replace("T", " ");

    const body = {
      tel,
      name,
      reservationDate: dateToSend,
    };
    onSubmit(body);
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="name">Name</label>
      <input minLength={3} maxLength={30} type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
      <label htmlFor="registrationDate">Registration date</label>
      <input type="datetime-local" id="registrationDate" value={registrationDate} onChange={(e) => setRegistrationDate(e.target.value)} /> <br />
      <label htmlFor="tel">Tel.</label>
      <input type="text" minLength={12} maxLength={12} id="tel" value={tel} onChange={(e) => setTel(e.target.value)} /> <br />
      <button type="submit">Submit</button>
    </form>
  );
}
