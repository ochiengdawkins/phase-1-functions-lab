// Code your solution in this file!

function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber >= 43)
    return blockNumber - 42

    else if (blockNumber <= 41)
    return 42 - blockNumber
}

function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264
}

function distanceTravelledInFeet(start, destination) {
    return ((Math.abs(start - destination)) * 264);
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0;
    }
    if (
        distanceTravelledInFeet(start, destination) > 400 &&
        distanceTravelledInFeet(start, destination) < 2000
    ) {
        return 2.56;
    }
    if (
        distanceTravelledInFeet(start, destination) > 2000 && 
        distanceTravelledInFeet(start, destination) < 2500
    ) {
        return 25;
    }
    if (distanceTravelledInFeet(start, destination) > 2500) {
        return "cannot travel that far";
    }
}