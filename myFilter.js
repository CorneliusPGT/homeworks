const myFilter = (array, callback) => {
  const res = [];
  for (const element of array) {
    if (callback(element)) res.push(element);
  }
  return res;
};
