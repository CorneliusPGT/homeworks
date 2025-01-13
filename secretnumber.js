let number = 1;
let guess = 0;
let min = 1;
let max = 100;

const firstComputer = () => {
  if (guess === 0) {
    number = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Компьютер 1 загадал число: ${number}`);
    return null;
  } else if (guess > number)
    {
        console.log('Компьютер 1: Меньше.')
       return "Меньше."; 
    } 
  else if (guess < number) 
    {
        console.log('Компьютер 1: Больше.')
        return "Больше.";
    }
  else return "Компьютер 1: Угадал!";
};

const secondComputer = (direction = null) => {
  if (!direction) {
    guess = Math.floor((min + max) / 2);
  } else if (direction === "Меньше.") {
    max = guess - 1;
    guess = Math.floor((min + max) / 2);
  } else if (direction === "Больше.") {
    min = guess + 1;
    guess = Math.floor((min + max) / 2);
  }

  console.log(`Компьютер 2: пробую число ${guess}.`);
  return guess;
};

while (guess !== number) {
  secondComputer(firstComputer());
}

console.log('Компьютер 1: Угадал!')