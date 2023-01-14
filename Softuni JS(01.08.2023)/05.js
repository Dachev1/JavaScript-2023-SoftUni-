function suppliesForSchool(input) {
    let chemicalPackages = Number(input[0]) * 5.80;
    let tagPackets = Number(input[1]) * 7.20;
    let cleaner = Number(input[2]) * 1.20;
    let percentageReduction = Number(input[3]);

    let sum= chemicalPackages + tagPackets + cleaner;
    let total = sum - (sum * 0.25);

    console.log(total);

}

suppliesForSchool(["2", "3", "4", "25"])