function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extrasCount = Number(input[1]);
    let priceForOneOutfit = Number(input[2]);

    let decor = 0.10 * budget;

    let outfit = extrasCount * priceForOneOutfit;
    if (extrasCount > 150) {
        outfit = 0.90 * outfit
    }

    let total = decor + outfit;
   
    if (total <= budget) {
        let moneyLeft = budget - total
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = total - budget
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }

}

godzillaVsKong(["15437.62",

"186",

"57.99"])