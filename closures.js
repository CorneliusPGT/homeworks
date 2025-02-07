const createLogger = () => {
  let messages = ["Hi", "Hello", "Salve"];
  function log(message) {
    messages.push(message);
  }
  function getLogs() {
    console.log(messages);
  }
  return { log, getLogs };
};

const createRandomGenerator = (min, max) => {
  return () => Math.floor(Math.random() * (max - min + 1)) + min;
};
