function hotelRoom(input) {
  let mounth = input[0];
  let numberOfNihths = Number(input[1]);
  let studioPrice = 0;
  let appartamentPrice = 0;

  if (mounth === "May" || mounth === "October") {
    if (numberOfNihths >= 1 && numberOfNihths <= 7) {
      studioPrice = 50;
      appartamentPrice = 65;
    }
    if (numberOfNihths > 7 && numberOfNihths <= 14) {
      studioPrice = 50 * 0.95;
      appartamentPrice = 65;
    }
    if (numberOfNihths > 14) {
      studioPrice = 50 * 0.7;
      appartamentPrice = 65 * 0.9;
    }
  }
  if (mounth === "June" || mounth === "September") {
    if (numberOfNihths >= 1 && numberOfNihths <= 14) {
      studioPrice = 75.2;
      appartamentPrice = 68.7;
    }
    if (numberOfNihths > 14) {
      studioPrice = 75.2 * 0.8;
      appartamentPrice = 68.7 * 0.9;
    }
  }
  if (mounth === "July" || mounth === "August") {
    if (numberOfNihths >= 1 && numberOfNihths <= 14) {
      studioPrice = 76;
      appartamentPrice = 77;
    }
    if (numberOfNihths > 14) {
      studioPrice = 76;
      appartamentPrice = 77 * 0.9;
    }
  }

  console.log(
    `Apartment: ${(appartamentPrice * numberOfNihths).toFixed(2)} lv.`
  );
  console.log(`Studio: ${(studioPrice * numberOfNihths).toFixed(2)} lv.`);
}

hotelRoom(["May", "15"]);
