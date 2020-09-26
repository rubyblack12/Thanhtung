function findOppositeNumber(n, inputnumber) {
    let OppositeNumber = ((n + inputnumber * 2) / 2) % n;
    return OppositeNumber;
}
console.log(findOppositeNumber(10, 2))