function yardGreening(input) {
    let meters = Number(input[0]);

    let priceWithOutDis = meters * 7.61;
    let discount = priceWithOutDis * 0.18;
    let finalPrice = (priceWithOutDis - discount);

    let text1 = `The final price is: ${finalPrice} lv.`;
    let text2 = `The discount is: ${discount} lv.`;

    console.log(text1);
    console.log(text2);
}

yardGreening(["550"])