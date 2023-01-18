function shopping(input) {
    let budget = Number(input[0]);
    let videoCard = Number(input[1]);
    let processor = Number(input[2]);
    let ram = Number(input[3]);

    let videoCardPrice = videoCard * 250;
    let processorPrcieForOne = 0.35 * videoCardPrice;
    let ramPriceForOne = 0.10 * videoCardPrice;

    let total = videoCardPrice + (processorPrcieForOne * processor) + (ramPriceForOne * ram)
    
    if (videoCard > processor) {
        total = total - (total * 0.15)
    }

    if (budget >= total) {
        console.log(`You have ${(budget - total).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more!`);
    }
}

shopping(["920.45",

"3",

"1",

"1"])