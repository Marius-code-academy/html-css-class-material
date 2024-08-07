export default function NewReservationForm() {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name"/> <br />
      <label htmlFor="registrationDate">Registration date</label>
      <input type="datetime-local" id="registrationDate"/> <br />
      <label htmlFor="tel">Tel.</label>
      <input type="text" minLength={12} maxLength={12} id="tel"/> <br />
      <button type="submit">Submit</button>
    </form>
  )
}
