const advice = {
  name: {
    correct: "Enter your name",
    incorrect: "Name is required",
    regex: /\w+/i,
  },
  message: {
    correct: "Enter your message",
    incorrect: "Message should be at least 5 characters",
    regex: /.{5,}/i,
  },
  phoeNumber: {
    correct: "Start +380",
    incorrect: "Wrong phone format",
    regex: /^\+380\d{9}$/,
  },
  email: {
    correct: "Enter your e-mail",
    incorrect: "Check your e-mail",
    regex: /^[\w-.]+@[\w-]+\.\w{2,3}$/i,
  },
};

export default advice;
