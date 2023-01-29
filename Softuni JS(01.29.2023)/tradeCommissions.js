function trade(input) {
  let city = input[0];
  let sales = Number(input[1]);

  switch (city) {
    case "Sofia":
      if (sales >= 0 && sales <= 500) {
        let comission = sales * 0.05;
        console.log(comission.toFixed(2));
      } else if (sales > 500 && sales <= 1000) {
        let comission = sales * 0.07;
        console.log(comission.toFixed(2));
      } else if (sales > 1000 && sales <= 10000) {
        let comission = sales * 0.08;
        console.log(comission.toFixed(2));
      } else if (sales > 10000) {
        let comission = sales * 0.12;
        console.log(comission.toFixed(2));
      } else {
        console.log("error");
      }
      break;

    case "Varna":
      if (sales >= 0 && sales <= 500) {
        let comission = sales * 0.045;
        console.log(comission.toFixed(2));
      } else if (sales > 500 && sales <= 1000) {
        let comission = sales * 0.075;
        console.log(comission.toFixed(2));
      } else if (sales > 1000 && sales <= 10000) {
        let comission = sales * 0.1;
        console.log(comission.toFixed(2));
      } else if (sales > 10000) {
        let comission = sales * 0.13;
        console.log(comission.toFixed(2));
      } else {
        console.log("error");
      }
      break;

    case "Plovdiv":
      if (sales >= 0 && sales <= 500) {
        let comission = sales * 0.055;
        console.log(comission.toFixed(2));
      } else if (sales > 500 && sales <= 1000) {
        let comission = sales * 0.08;
        console.log(comission.toFixed(2));
      } else if (sales > 1000 && sales <= 10000) {
        let comission = sales * 0.12;
        console.log(comission.toFixed(2));
      } else if (sales > 10000) {
        let comission = sales * 0.145;
        console.log(comission.toFixed(2));
      } else {
        console.log("error");
      }
      break;
    default:
      console.log("error");
      break;
  }
}
