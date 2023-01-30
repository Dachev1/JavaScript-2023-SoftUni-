function newHouse(input) {
  let type = input[0];
  let count = Number(input[1]);
  let budget = Number(input[2]);

  let totalPrice = 0;

  switch (type) {
    case "Roses":
      totalPrice = count * 5;
      break;

    case "Dahlias":
      totalPrice = count * 3.8;
      break;

    case "Tulips":
      totalPrice = count * 2.8;
      break;

    case "Narcissus":
      totalPrice = count * 3;
      break;

    case "Gladiolus":
      totalPrice = count * 2.5;
      break;
  }

  if (type === "Roses" && count > 80) {
    totalPrice *= 0.9;
  } else if (type === "Dahlias" && count > 90) {
    totalPrice *= 0.85;
  } else if (type === "Tulips" && count > 80) {
    totalPrice *= 0.85;
  } else if (type === "Narcissus" && count < 120) {
    totalPrice *= 1.15;
  } else if (type === "Gladiolus" && count < 80) {
    totalPrice *= 1.2;
  }

  if (budget >= totalPrice) {
    console.log(
      `Hey, you have a great garden with ${count} ${type} and ${(
        budget - totalPrice
      ).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${(totalPrice - budget).toFixed(
        2
      )} leva more.`
    );
  }
}

newHouse(["Roses", "55", "250"]);
