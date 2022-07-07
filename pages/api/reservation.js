const reservations = [
  {
    name: "John",
    phone: "Doe",
    email: "example@gmail.com",
    guests: "2",
    datetime: new Date().toLocaleDateString("en-uk", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(reservations);
  } else if (req.method === "POST") {
    const reservation = req.body;
    const newReservation = {
      ...reservation,
      datetime: new Date(reservation.datetime).toLocaleString(),
    };
    reservations.push(newReservation);
    res.status(201).json(newReservation);
  }
}
