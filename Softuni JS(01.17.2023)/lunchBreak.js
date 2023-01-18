function  lunchBreak(input) {
    let movieName = input[0];
    let epsiodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = (1 / 8) * breakDuration;
    let restTime = (1 / 4) * breakDuration;

    let totalOccupiedTime = lunchTime + restTime;
    let movieTime = breakDuration - totalOccupiedTime;

    if (movieTime >= epsiodeDuration) {
        let timeLeft = movieTime - epsiodeDuration;
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(timeLeft)} minutes free time.`);
    } else {
        let timeNeeded = epsiodeDuration - movieTime;
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones", "60", "96"])