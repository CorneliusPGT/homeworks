const getSum = (object) => {
  let sum = 0;
  for (key in object) {
    if (typeof object[key] === "number") sum += object[key];
  }
  return sum;
};

const getSumUltimate = (object) => {
    let array = [];
    for (key in object) {
      if (typeof object[key] === "number") array.push(key)
    }
   return array.sort((a, b) => b.localeCompare(a))
  };