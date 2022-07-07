const subscribers = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "example@gmail.com",
    date: new Date().toLocaleDateString("en-uk", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(subscribers);
  } else if (req.method === "POST") {
    const subscriber = req.body;
    const newSubscriber = {
      ...subscriber,
      date: new Date().toLocaleDateString("en-uk", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };
    subscribers.push(newSubscriber);
    res.status(201).json(newSubscriber);
  }
}
