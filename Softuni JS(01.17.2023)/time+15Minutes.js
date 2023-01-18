function time(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);

  let minutes = a * 60 + b + 15;

  let hours = Math.trunc(minutes / 60);
  let minutesEnd = minutes % 60;

  if ((hours) => 24) {
    hours = hours % 24;
  }

  if (minutesEnd < 10) {
    console.log(`${hours}:0${minutesEnd}`);
  } else if (minutesEnd >= 10) {
    console.log(`${hours}:${minutesEnd}`);
  }
}

time(["1", "46"]);
