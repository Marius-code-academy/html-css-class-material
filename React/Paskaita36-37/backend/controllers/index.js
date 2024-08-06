import Reservation from "../models/Reservation.js";

export async function getReservations(req, res) {
  try {
    const reservations = await Reservation.find({}, { __v: 0 });

    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}

export async function createNewReservation(req, res) {
  const { reservationDate, name, tel } = req.body;

  try {
    const existingReservation = await Reservation.find({ reservationDate: reservationDate });
    if (existingReservation.length > 0) {
      res.status(400).json({ message: "Date already taken" });
      return;
    }

    const newReservation = new Reservation({
      name,
      phone: tel,
      reservationDate,
    });

    await newReservation.save();

    res.json(newReservation);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}

export async function updateReservation(req, res) {
  const { id } = req.params;
  const { tel, reservationDate, name } = req.body;

  try {
    const existingReservation = await Reservation.find({ reservationDate: reservationDate });
    if (existingReservation.length > 0) {
      res.status(400).json({ message: "Date already taken" });
      return;
    }

    const reservation = await Reservation.findById(id);

    if (!reservation) {
      res.status(404).json({ message: "Reservation does not exist" });
      return;
    }

    reservation.phone = tel;
    reservation.reservationDate = reservationDate;
    reservation.name = name;

    await reservation.save();

    res.json(reservation);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}

export async function deleteReservation(req, res) {
  const { id } = req.params;

  try {
    const deletedReservation = await Reservation.findByIdAndDelete(id);

    if (!deletedReservation) {
      res.status(404).json({ message: "Reservation does not exist" });
      return;
    }

    res.json(deletedReservation);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}
