function deposit(input) {
    let depositSum = Number(input[0]);
    let term = Number(input[1]);
    let yearlyIncreasedPercent = Number(input[2]);
    let yearlyIncreasedDecimal= yearlyIncreasedPercent / 100;

    let sum = depositSum + term * ((depositSum * yearlyIncreasedDecimal) / 12);
    console.log(sum);

}

deposit(["200", "3", "5.7"])