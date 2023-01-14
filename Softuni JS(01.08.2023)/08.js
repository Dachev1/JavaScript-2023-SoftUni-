function basketballEquipment(input) {
    let annualTrainigFee = Number(input[0]);

    let priceDiffFeeSneakers = 0.4 * annualTrainigFee; 
    let sneakersPrice = annualTrainigFee - priceDiffFeeSneakers;

    let priceDiffSneakersOutfit = 0.2 * sneakersPrice;
    let outfitPrice = sneakersPrice - priceDiffSneakersOutfit;

    let ballPrice = (1 / 4) * outfitPrice;
    let accessoriesPrice = (1 / 5) * ballPrice;

    let totalPrice = annualTrainigFee + sneakersPrice + outfitPrice + ballPrice + accessoriesPrice;

    console.log(totalPrice);


}

basketballEquipment(["365"])