function foodDelivery(input) {
    let chickenMenu = Number(input[0]) * 10.35;
    let fishMenu = Number(input[1]) * 12.40;
    let veganMenu = Number(input[2]) * 8.15;

    let totalMenuPrice = chickenMenu + fishMenu + veganMenu;
    let dessert = 0.20 * totalMenuPrice;
    let delivery = 2.50

    let total = totalMenuPrice + dessert + delivery;

    console.log(total);

}

foodDelivery(["2", "4", "3"])