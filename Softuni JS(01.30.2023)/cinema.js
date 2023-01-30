function cinema(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let places = rows * cols;
    let totalPrice = 0;

    if (type === 'Premiere') {
        totalPrice = places * 12;
    } else if (type === 'Normal') {
        totalPrice = places * 7.50;
    } else {
        totalPrice = places * 5;
    }

    console.log(totalPrice.toFixed(2));
    console.log('leva');
}

cinema(["Premiere", "10", "12"])