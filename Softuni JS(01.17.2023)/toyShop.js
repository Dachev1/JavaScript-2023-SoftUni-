function toyShop(input) {
    let holidayPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let toysPrice = (puzzleCount * 2.60) + (dollsCount * 3) + (bearsCount * 4.10) + (minionsCount * 8.20) + (trucksCount * 2);
    let toysCount = puzzleCount + dollsCount + bearsCount + minionsCount + trucksCount;

    if (toysCount >= 50) {
        toysPrice = 0.75 * toysPrice
    }

    let moneyWon = toysPrice;
    moneyWon = 0.90 * moneyWon;

    if (moneyWon >= holidayPrice) {
        console.log(`Yes! ${(moneyWon - holidayPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(holidayPrice - moneyWon ).toFixed(2)} lv needed.`);
    }

}

toyShop(["320", "8", "2", "5", "5", "1"])